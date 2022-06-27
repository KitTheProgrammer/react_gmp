import React, { useCallback, useEffect, useState } from 'react'

import { Header, Body, Modal } from '../../components'
import { EditMovieModal } from './components'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setFilms, setSelectedFilm } from '../../redux/reducers/films'

import './styles.scss'
import { getFilms } from '../../api'

const MainPage = (): React.ReactElement => {
  const dispatch = useAppDispatch()

  const films = useAppSelector(({ films }) => films.films)
  const selectedFilm = useAppSelector(({ films }) => films.selectedFilm)
  
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [editMovieVisible, setEditMovieVisible] = useState(false)
  
  useEffect(() => {
    dispatch(getFilms({ sortBy: 'release_date', sortOrder: 'desc' }))
  }, [dispatch])
  
  const deleteVideo = useCallback(() => {
    if (selectedFilm !== null) {
      dispatch(setFilms(films.filter(({id}) => id !== selectedFilm.id)))
      dispatch(setSelectedFilm(null))
      setDeleteModalVisible(false)
    }
  }, [selectedFilm, films, dispatch])

  const submitEdit = useCallback((data: any) => {
    if (selectedFilm?.id || selectedFilm?.id === 0) {
      dispatch(setFilms(films.map((f) => f.id === selectedFilm.id ? { ...f, ...data } : f)))
    } else {
      dispatch(setFilms([ ...films, { ...data, id: Math.max(...films.map((i) => i.id)) + 1 } ]))
    }
    dispatch(setSelectedFilm(null))
  }, [selectedFilm, films, dispatch])

  const addNewFilm = () => {
    dispatch(setSelectedFilm(null))
    setEditMovieVisible(true)
  }

  return (
    <div className={'main-page'}>
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
      <Header addNewFilm={addNewFilm} close={() => dispatch(setSelectedFilm(null))} selectedFilm={selectedFilm}/>
      <Body
        films={films}
        onDeleteVideo={() => setDeleteModalVisible(true)}
        onEditVideo={() => setEditMovieVisible(true)}
        selectedFilm={selectedFilm}
        setSelectedFilm={(film) => dispatch(setSelectedFilm(film))}
      />
      <div className={'main-page__footer'}>
        <span className={'main-logo'}><b>netflix</b>roulette</span>
      </div>
    </div>
  )
}

export default MainPage
