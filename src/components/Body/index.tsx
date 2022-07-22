import React  from 'react'

import { Film, TopBar } from '../../pages/MainPage/components'
import { BodyProps } from '../../types'

import './styles.scss'
import { sortItems } from '../../GlobalConstants'

const Body: React.FC<BodyProps> = (props) => {
  const { films, onEditVideo, onDeleteVideo, selectedFilm, setSelectedFilm, genre } = props

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
