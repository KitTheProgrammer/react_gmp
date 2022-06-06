import React, {useCallback, useState} from 'react'

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

const MainPage = (): React.ReactElement => {
  const [selectedFilm, setSelectedFilm]: [any, React.Dispatch<React.SetStateAction<any>>] = useState(null)
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [filmsMocks, setFilmsMocks] = useState((): FilmData[] => [
    {
      title: 'Pulp Fiction',
      genre: ['Comedy', 'Horror'],
      releaseDate: 1083801600000,
      imgHref: pulpFiction,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Bohemian Rhapsody',
      genre: ['Drama', 'Crime'],
      releaseDate: 1052179200000,
      imgHref: bogRaps,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Kill Bill: Vol 2',
      genre: ['Documentary'],
      releaseDate: 768182400000,
      imgHref: killBill,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Kill Bill: Vol 1',
      genre: ['Crime', 'Horror'],
      releaseDate: 736646400000,
      imgHref: killBill,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Kill Bill: Vol 0',
      genre: ['Documentary', 'Comedy'],
      releaseDate: 673488000000,
      imgHref: killBill,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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

  const submitEdit = useCallback((data: any) => {
    if (selectedFilm?.id || selectedFilm?.id === 0) {
      setFilmsMocks(filmsMocks.map((f) => f.id === selectedFilm.id ? { ...f, ...data } : f))
    } else {
      setFilmsMocks([ ...filmsMocks, { ...data, id: Math.max(...filmsMocks.map((i) => i.id)) + 1 } ])
    }
    setSelectedFilm(null)
  }, [selectedFilm, filmsMocks])

  const addNewFilm = () => {
    setSelectedFilm(null)
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
      <Header addNewFilm={addNewFilm} close={() => setSelectedFilm(null)} selectedFilm={selectedFilm}/>
      <Body
        films={filmsMocks}
        onDeleteVideo={() => setDeleteModalVisible(true)}
        onEditVideo={() => setEditMovieVisible(true)}
        selectedFilm={selectedFilm}
        setSelectedFilm={setSelectedFilm}
      />
      <div className={'main-page__footer'}>
        <span className={'main-logo'}><b>netflix</b>roulette</span>
      </div>
    </div>
  )
}

export default MainPage
