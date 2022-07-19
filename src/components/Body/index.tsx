import React from 'react'

import { Film, TopBar } from '../../pages/MainPage/components'
import { BodyProps } from '../../types'
import { useAppDispatch, useAppSelector, useQuery } from '../../hooks'
import { setGenreOption, setSortOption } from '../../actions'

import './styles.scss'
import { genreLabels, sortItems } from '../../GlobalConstants'

const Body: React.FC<BodyProps> = (props) => {
  const dispatch = useAppDispatch()

  const { films, onEditVideo, onDeleteVideo, selectedFilm, setSelectedFilm } = props

  const query = useQuery()
  const genre = query.get('genre') || genreLabels[0]
  const sortOption = Number(query.get('sortBy')) || 0

  return (
    <div className={'main-body'}>
      <TopBar
        genre={genre}
        setGenre={(genre) => dispatch(setGenreOption(genre))}
        currentSortItem={sortOption}
        setSortItem={(option) => dispatch(setSortOption(option))}
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
