import React from 'react'

import { GenreMenuBar, SortMenu } from '../index'
import { GenreMenuBarProps } from '../GenreMenuBar'
import { SortMenuProps } from '../SortMenu'

import './styles.scss'
import PropTypes from 'prop-types'

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

TopBar.propTypes = {
  genre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
  sortItems: PropTypes.array.isRequired,
  currentSortItem: PropTypes.number.isRequired,
  setSortItem: PropTypes.func.isRequired,
  filmsFound: PropTypes.number.isRequired,
}

export default TopBar
