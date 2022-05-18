import React, { useState } from 'react'

// @ts-ignore
import { TopBar } from './components/index.ts'

import './styles.scss'

const genreLabels = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']
const sortItems = ['RELEASE DATE', 'A-Z', 'Z-A']

const Body = () => {
  const [genre, setGenre] = useState(genreLabels[0])
  const [sortOption, setSortOption] = useState(0)

  return (
    <div className={'main-body'}>
      <TopBar
        genre={genre}
        setGenre={setGenre}
        currentSortItem={sortOption}
        setSortItem={setSortOption}
        sortItems={sortItems}
      />
    </div>
  )
}

export default Body
