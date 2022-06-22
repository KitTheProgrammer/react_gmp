import React from 'react'

import { genreLabels as labels } from '../../../../GlobalConstants'
import { GenreMenuBarProps } from '../../../../types'

import './styles.scss'

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
