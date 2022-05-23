import React, {useCallback, useMemo, useState} from 'react'

import { TopBar, Film } from '../../pages/MainPage/components'
// @ts-ignore
import pulpFiction from '../../assets/images/Pulp_fiction.png'
// @ts-ignore
import bogRaps from '../../assets/images/bog_raps.png'
// @ts-ignore
import killBill from '../../assets/images/kill_bill.png'

import './styles.scss'

const genreLabels = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']
const sortItems = ['RELEASE DATE', 'A-Z', 'Z-A']

interface FilmData {
  imgHref: string
  genre: string
  title: string
  releaseDate: number
}

const filmsMocks: FilmData[] = [
  {
    title: 'Pulp Fiction',
    genre: 'Action & Adventure, comedy',
    releaseDate: 2004,
    imgHref: pulpFiction,
  },
  {
    title: 'Bohemian Rhapsody',
    genre: 'Drama, Biography, horror',
    releaseDate: 2003,
    imgHref: bogRaps,
  },
  {
    title: 'Kill Bill: Vol 2',
    genre: 'Oscar winning movie, crime',
    releaseDate: 1994,
    imgHref: killBill,
  },
  {
    title: 'Kill Bill: Vol 1',
    genre: 'Oscar winning movie, crime',
    releaseDate: 1993,
    imgHref: killBill,
  },
  {
    title: 'Kill Bill: Vol 0',
    genre: 'Oscar winning movie, crime',
    releaseDate: 1991,
    imgHref: killBill,
  },
]

const Body = () => {
  const [genre, setGenre] = useState(genreLabels[0])
  const [sortOption, setSortOption] = useState(0)
  const [selectedFilm, setSelectedFilm] = useState(-1)

  const filterOptionFunction = useCallback((films: FilmData[]) => {
    if (genre !== genreLabels[0]) {
      films = films.filter((film) => film.genre.toLowerCase().includes(genre.toLowerCase()))
    }
    switch (sortOption) {
      case 0: {
        films = films.sort((a, b) => a.releaseDate - b.releaseDate)
        break
      }
      case 1: {
        films = films.sort(({ title: a }, { title: b }) => (a < b) ? -1 : (b < a) ? 1 : 0)
        break
      }
      case 2: {
        films = films.sort(({ title: a }, { title: b }) => (a < b) ? 1 : (b < a) ? -1 : 0)
        break
      }
    }
    return films
  }, [ genre, sortOption ])

  const currFilms = useMemo(() => filterOptionFunction(filmsMocks), [filterOptionFunction])

  const deleteVideo = useCallback((ind: number) => alert(`delete video #${ind}`), [])
  const editVideo = useCallback((txt: string) => alert(`edit video ${txt}`), [])

  return (
    <div className={'main-body'}>
      <TopBar
        genre={genre}
        setGenre={setGenre}
        currentSortItem={sortOption}
        setSortItem={setSortOption}
        sortItems={sortItems}
        filmsFound={currFilms.length}
      />
      <div className={'main-body__film-bar'}>
        {currFilms.map(({ title, imgHref, releaseDate, genre }, index) => (
          <Film
            imgHref={imgHref}
            genre={genre}
            title={title}
            releaseDate={releaseDate}
            index={index}
            onClick={setSelectedFilm}
            selected={index === selectedFilm}
            onEdit={editVideo}
            onDelete={deleteVideo}
            key={`${releaseDate}_${title}_${genre}_${index}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Body
