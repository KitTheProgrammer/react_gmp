import React, { useState } from 'react'

import './styles.scss'

const labels = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']

const GenreMenuBar = () => {
  const [genre, setGenre] = useState(labels[0])

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
