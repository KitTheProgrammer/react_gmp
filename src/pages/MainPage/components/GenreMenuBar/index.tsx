import React from 'react'

import { genreLabels as labels } from '../../../../GlobalConstants'

import './styles.scss'

export interface GenreMenuBarProps {
  genre: string
  setGenre: React.Dispatch<React.SetStateAction<string>>
}

const GenreMenuBar = ({ genre, setGenre }: GenreMenuBarProps): React.ReactElement => {
  return (<nav className={'genre-menu-bar genre-menu-bar__black'}>
    {labels.map((label) => (
      <button
        className={`genre-menu-bar__item${genre === label ? ' genre-menu-bar__item__underlined' : ''}`}
        onClick={() => setGenre(label)}
        key={label}
      >
        {label}
      </button>
    ))}
  </nav>)
}

export default GenreMenuBar
