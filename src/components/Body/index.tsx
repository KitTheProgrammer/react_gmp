import React from 'react'

import { Film, TopBar } from '../../pages/MainPage/components'
import { BodyProps } from '../../types'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setGenreOption, setSortOption } from '../../actions'

import './styles.scss'

const sortItems = ['RELEASE DATE', 'A-Z', 'Z-A']

const Body: React.FC<BodyProps> = (props) => {
  const dispatch = useAppDispatch()

  const { films, onEditVideo, onDeleteVideo, selectedFilm, setSelectedFilm } = props

  const sortOption = useAppSelector(({ films }) => films.selectedSortOption)
  const genre = useAppSelector(({ films }) => films.selectedGenre)

  return (
    <div className={'main-body'}>
      <TopBar
        genre={genre}
        setGenre={(g) => dispatch(setGenreOption(g))}
        currentSortItem={sortOption}
        setSortItem={(o) => dispatch(setSortOption(o))}
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
