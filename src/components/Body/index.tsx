import React, { useMemo, useState } from 'react'

import { Film, TopBar } from '../../pages/MainPage/components'
import { genreLabels } from '../../GlobalConstants'

import './styles.scss'

const sortItems = ['RELEASE DATE', 'A-Z', 'Z-A']

export interface FilmData {
  id: number
  imgHref: string
  genre: string[]
  title: string
  releaseDate: number
  description?: string
  rating?: number
  runtime?: number
}

export interface BodyProps {
  films: FilmData[]
  onEditVideo: () => void
  onDeleteVideo: (ind: number) => void
  selectedFilm: FilmData | null
  setSelectedFilm: React.Dispatch<React.SetStateAction<any>>
}

const Body: React.FC<BodyProps> = (props) => {
  const { films, onEditVideo, onDeleteVideo, selectedFilm, setSelectedFilm } = props

  const [genre, setGenre] = useState(genreLabels[0])
  const [sortOption, setSortOption] = useState(0)
  
  const currFilms = useMemo(() => {
    let tempFilms = films
    
    if (genre !== genreLabels[0]) {
      tempFilms = tempFilms.filter((film) => film.genre.map((g) => g.toLowerCase()).includes(genre.toLowerCase()))
    }
    switch (sortOption) {
      case 0: {
        tempFilms = tempFilms.sort((a, b) => a.releaseDate - b.releaseDate)
        break
      }
      case 1: {
        tempFilms = tempFilms.sort(({ title: a }, { title: b }) => (a < b) ? -1 : (b < a) ? 1 : 0)
        break
      }
      case 2: {
        tempFilms = tempFilms.sort(({ title: a }, { title: b }) => (a < b) ? 1 : (b < a) ? -1 : 0)
        break
      }
    }
    return tempFilms
  }, [films, genre, sortOption])

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
        {currFilms.map((data) => (
          <Film
            imgHref={data.imgHref}
            genre={data.genre}
            title={data.title}
            releaseDate={data.releaseDate}
            index={data.id}
            onClick={setSelectedFilm}
            selected={data.id === selectedFilm?.id}
            onEdit={onEditVideo}
            onDelete={onDeleteVideo}
            data={data}
            key={`${data.releaseDate}_${data.title}_${genre}_${data.id}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Body
