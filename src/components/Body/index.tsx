import React, { useEffect } from 'react'

import { Film, TopBar } from '../../pages/MainPage/components'
import { BodyProps } from '../../types'
import { useAppDispatch, useQuery } from '../../hooks'
import { setSearchOptions } from '../../actions'

import './styles.scss'
import { genreLabels, sortItems } from '../../GlobalConstants'

const Body: React.FC<BodyProps> = (props) => {
  const dispatch = useAppDispatch()

  const { films, onEditVideo, onDeleteVideo, selectedFilm, setSelectedFilm, genre, sortOption } = props

  useEffect(() => {
    dispatch(setSearchOptions(genre, sortOption))
  }, [dispatch, genre, sortOption])

  return (
    <div className={'main-body'}>
      <TopBar
        genre={genre}
        sortItems={sortItems}
        filmsFound={films.length}
      />
      <div className={'main-body__film-bar'}>
        {films.map((data) => (
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
