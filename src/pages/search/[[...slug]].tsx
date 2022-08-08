import React, { useCallback, useEffect, useState } from 'react'

import { Body, Header, Modal } from '../../components'
import { EditMovieModal } from './components'
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks'
import { setError, setSelectedFilm } from '../../redux/reducers/films'
import { createFilm, deleteFilm, getFilmsForSSR, updateFilms } from '../../api'
// import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FilmData } from '../../types'

import { useRouter } from 'next/router'
import { genreLabels } from '../../GlobalConstants'
import { setSearchOptions } from '../../actions'
import { getGenreParams, getSearchParams, getSortParams } from '../../utils'

const Search: React.FC = ({ filmsFromProp }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const query = router.query
  const movie = query.movie as string
  const genre = query.genre as string || genreLabels[0]
  const sortOption = Number(query.sortBy) || 0
  const [searchQuery] = query.slug as string || []

  let films = filmsFromProp

  if (searchQuery || genre !== genreLabels[0] || sortOption || movie) {
    films = useAppSelector(({ films }) => films.films)
  }


  const selectedFilm = useAppSelector(({ films }) => films.selectedFilm)
  const { error, errorMessage } = useAppSelector(({ films }) => films.error)

  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [editMovieVisible, setEditMovieVisible] = useState(false)

  useEffect(() => {
    dispatch(setSearchOptions(genre, sortOption, searchQuery))
  }, [dispatch, genre, sortOption, searchQuery])

  useEffect(() => {
    const id = Number(movie)
    if (isNaN(id)) {
      dispatch(setSelectedFilm(null))
      return
    }
    dispatch(setSelectedFilm(id))
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
    console.log('click1')
    delete query.slug
    if (film?.id) {
      router.push({ pathname: window.location.pathname, query: { ...query, movie: film.id  } } )
    } else {
      delete query.movie
      router.push({ pathname: window.location.pathname, query } )
    }
    // navigate(`${pathname}?${query.toString()}`, { replace: true })
    console.log('click2')
    // dispatch(setSelectedFilm(film))
  }

  // return <div>Hello</div>

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
        genre={genre}
        sortOption={sortOption}
      />
      <div className={'main-page__footer'}>
        <span className={'main-logo'}><b>netflix</b>roulette</span>
      </div>
    </div>
  )
}

export async function getServerSideProps({ query: { sortBy, genre }, query }) {
  const [ searchQuery ] = query?.slug || []
  const films = await getFilmsForSSR({ ...getSortParams(sortBy), ...getGenreParams(genre), ...getSearchParams(searchQuery) })
  return { props: { filmsFromProp: films } }
}

export default Search
