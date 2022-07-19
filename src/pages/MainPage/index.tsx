import React, { useCallback, useEffect, useState } from 'react'

import { Body, Header, Modal } from '../../components'
import { EditMovieModal } from './components'
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks'
import { setError, setSelectedFilm } from '../../redux/reducers/films'
import { createFilm, deleteFilm, getFilms, updateFilms } from '../../api'
import { useNavigate } from 'react-router-dom'
import { FilmData } from '../../types'

import './styles.scss'

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch()
  const query = useQuery()
  const navigate = useNavigate()
  const movie = query.get('movie')

  const films = useAppSelector(({ films }) => films.films)
  const selectedFilm = useAppSelector(({ films }) => films.selectedFilm)
  const { error, errorMessage } = useAppSelector(({ films }) => films.error)

  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [editMovieVisible, setEditMovieVisible] = useState(false)
  
  useEffect(() => {
    dispatch(getFilms({ sortBy: 'release_date', sortOrder: 'desc' }))
  }, [dispatch])

  useEffect(() => {
    dispatch(setSelectedFilm(Number(movie)))
  }, [dispatch, movie, films])

  const clearError = () => {
    dispatch(setError({ error: false, errorMessage: '' }))
  }

  useEffect(() => {
    if (error) {
      setTimeout(() => clearError(), 5000)
    }
  }, [dispatch, error, clearError])
  
  const deleteVideo = useCallback(() => {
    if (selectedFilm !== null) {
      dispatch(deleteFilm(selectedFilm.id))
      dispatch(setSelectedFilm(null))
      setDeleteModalVisible(false)
    }
  }, [selectedFilm, dispatch])

  const submitEdit = useCallback((data: any) => {
    if (selectedFilm?.id || selectedFilm?.id === 0) {
      dispatch(updateFilms({ ...selectedFilm, ...data}))
    } else {
      dispatch(createFilm(data))
    }
    dispatch(setSelectedFilm(null))
  }, [selectedFilm, dispatch])

  const addNewFilm = () => {
    dispatch(setSelectedFilm(null))
    setEditMovieVisible(true)
  }

  const selectFilmHandler = (film: FilmData | null) => {
    if (film?.id) {
      query.set('movie', String(film.id))
    } else {
      query.delete('movie')
    }
    navigate(`/search?${query.toString()}`, { replace: true })
    dispatch(setSelectedFilm(film))
  }

  return (
    <div className={'main-page'}>
      <Modal visible={error} title={'Error happened'} closeModal={clearError}>
        {errorMessage}
      </Modal>
      <Modal visible={deleteModalVisible} title={'Delete movie'} closeModal={() => setDeleteModalVisible(false)}>
        <div className={'delete-modal-inner'}>
          <span>Are you sure you want to delete this movie?</span>
          <button onClick={deleteVideo}>CONFIRM</button>
        </div>
      </Modal>
      <EditMovieModal
        filmData={selectedFilm}
        visible={editMovieVisible}
        title={'Edit movie'}
        closeModal={() => setEditMovieVisible(false)}
        submitEdit={submitEdit}
      />
      <Header addNewFilm={addNewFilm} close={() => selectFilmHandler(null)} selectedFilm={selectedFilm}/>
      <Body
        films={films}
        onDeleteVideo={() => setDeleteModalVisible(true)}
        onEditVideo={() => setEditMovieVisible(true)}
        selectedFilm={selectedFilm}
        setSelectedFilm={(film) => selectFilmHandler(film)}
      />
      <div className={'main-page__footer'}>
        <span className={'main-logo'}><b>netflix</b>roulette</span>
      </div>
    </div>
  )
}

export default MainPage
