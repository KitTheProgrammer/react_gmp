import React from 'react'

import { genreLabels, genreLabels as labels } from '../../../../GlobalConstants'

import './styles.scss'
import { useQuery } from '../../../../hooks'
import { useLocation, useNavigate } from 'react-router-dom'

const GenreMenuBar = (): React.ReactElement => {
  const query = useQuery()
  const currGenre = query.get('genre') || genreLabels[0]
  const navigate = useNavigate()
  const pathname = useLocation().pathname

  const handleClick = (genre: string) => {
    if (genre) {
      query.set('genre', String(genre))
    }
    navigate(`${pathname}?${query.toString()}`, { replace: true })
  }

  return (<nav className={'genre-menu-bar genre-menu-bar__black'}>
    {labels.map((label) => (
      <button
        className={`genre-menu-bar__item${currGenre === label ? ' genre-menu-bar__item__underlined' : ''}`}
        onClick={() => handleClick(label)}
        key={label}
      >
        {label}
      </button>
    ))}
  </nav>)
}

export default GenreMenuBar
