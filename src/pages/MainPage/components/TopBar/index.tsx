import React from 'react'

import { GenreMenuBar, SortMenu } from '../index'
import { GenreMenuBarProps } from '../GenreMenuBar'
import { SortMenuProps } from '../SortMenu'

import './styles.scss'

export interface TopBarProps extends GenreMenuBarProps, SortMenuProps {
  filmsFound: number
}

const TopBar: React.FC<TopBarProps> = (props) => {
  const { genre, setGenre, currentSortItem, sortItems, setSortItem, filmsFound } = props

  return <div className={'top-bar'}>
    <div className={'top-bar__main'}>
      <GenreMenuBar genre={genre} setGenre={setGenre} />
      <SortMenu currentSortItem={currentSortItem} setSortItem={setSortItem} sortItems={sortItems}/>
    </div>
    <div className={'top-bar__info'}>
      <b>{filmsFound}</b>&nbsp; movies found
    </div>
  </div>
}

export default TopBar
