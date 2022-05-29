import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'

import { Header, Body, Modal } from '../../components'
import { FilmData } from '../../components/Body'

import { EditMovieModal } from './components'

import './styles.scss'

// @ts-ignore
import pulpFiction from '../../assets/images/Pulp_fiction.png'
// @ts-ignore
import bogRaps from '../../assets/images/bog_raps.png'
// @ts-ignore
import killBill from '../../assets/images/kill_bill.png'

export interface MainPageProps {
  testProp: string
}

const MainPage = (): React.ReactElement => {
  const [selectedFilm, setSelectedFilm]: [any, React.Dispatch<React.SetStateAction<any>>] = useState(null)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [filmsMocks, setFilmsMocks] = useState((): FilmData[] => [
    {
      title: 'Pulp Fiction',
      genre: ['Comedy', 'Horror'],
      releaseDate: 1083801600000,
      imgHref: pulpFiction,
    },
    {
      title: 'Bohemian Rhapsody',
      genre: ['Drama', 'Crime'],
      releaseDate: 1052179200000,
      imgHref: bogRaps,
    },
    {
      title: 'Kill Bill: Vol 2',
      genre: ['Documentary'],
      releaseDate: 768182400000,
      imgHref: killBill,
    },
    {
      title: 'Kill Bill: Vol 1',
      genre: ['Crime', 'Horror'],
      releaseDate: 736646400000,
      imgHref: killBill,
    },
    {
      title: 'Kill Bill: Vol 0',
      genre: ['Documentary', 'Comedy'],
      releaseDate: 673488000000,
      imgHref: killBill,
    },
  ].map((it, id) => ({ ...it, id })))
  const [editMovieVisible, setEditMovieVisible] = useState(false)

  const deleteVideo = useCallback(() => {
    if (selectedFilm !== null) {
      setFilmsMocks(filmsMocks.filter(({id}) => id !== selectedFilm.id))
      setSelectedFilm(null)
      setDeleteModalVisible(false)
    }
  }, [selectedFilm, filmsMocks, setFilmsMocks, setSelectedFilm])

  const editVideo = useCallback(() => setEditMovieVisible(true), [])

  const submitEdit = useCallback((data: any) => {
    if (selectedFilm?.id) {
      setFilmsMocks(filmsMocks.map((f) => f.id === selectedFilm.id ? { ...f, ...data } : f))
    } else {
      // @ts-ignore
      console.log('test', Math.max(filmsMocks.map((i) => i.id)))
      setFilmsMocks([ ...filmsMocks, { ...data, id: 1000 } ])
    }
  }, [selectedFilm, filmsMocks])

  const addNewFilm = useCallback(() => {
    setSelectedFilm(null)
    setEditMovieVisible(true)
  }, [])

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
      <Header addNewFilm={addNewFilm}/>
      <Body
        films={filmsMocks}
        onDeleteVideo={() => setDeleteModalVisible(true)}
        onEditVideo={editVideo}
        selectedFilm={selectedFilm}
        setSelectedFilm={setSelectedFilm}
      />
      <div className={'main-page__footer'}>
        <span className={'main-logo'}><b>netflix</b>roulette</span>
      </div>
    </div>
  )
}

MainPage.propTypes = {
  testProp: PropTypes.string
}

export default MainPage
