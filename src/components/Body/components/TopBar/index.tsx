import React from 'react'

// @ts-ignore
import { GenreMenuBar, SortMenu } from '../index.ts'
// @ts-ignore
import { GenreMenuBarProps } from '../GenreMenuBar/index.tsx'
// @ts-ignore
import { SortMenuProps } from '../SortMenu/index.tsx'

import './styles.scss'
import PropTypes from 'prop-types'

export interface TopBarProps extends GenreMenuBarProps, SortMenuProps {}

// @ts-ignore
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
