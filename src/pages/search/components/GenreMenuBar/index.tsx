import React from 'react'

import { genreLabels, genreLabels as labels } from '../../../../GlobalConstants'
import { useRouter } from 'next/router'

const GenreMenuBar = (): React.ReactElement => {
  const router = useRouter()
  const query = router.query
  const currGenre = query.genre as string || genreLabels[0]

  const handleClick = (genre: string) => {
    if (genre) {
      delete query.searchQuery
      router.push({ pathname: window.location.pathname, query: { ...query, genre } })
    }
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
