import React from 'react'

import { GenreMenuBar, SortMenu } from '../index'
import { GenreMenuBarProps } from '../GenreMenuBar'
import { SortMenuProps } from '../SortMenu'

import './styles.scss'
import PropTypes from 'prop-types'

export interface TopBarProps extends GenreMenuBarProps, SortMenuProps {}

const TopBar: React.FC<TopBarProps> = ({ genre, setGenre, currentSortItem, sortItems, setSortItem }) => {

  return <div className={'top-bar'}>
    <GenreMenuBar genre={genre} setGenre={setGenre} />
    <SortMenu currentSortItem={currentSortItem} setSortItem={setSortItem} sortItems={sortItems}/>
  </div>
}

TopBar.propTypes = {
  genre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired
}

export default TopBar
