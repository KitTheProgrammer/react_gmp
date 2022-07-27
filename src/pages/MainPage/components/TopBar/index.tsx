import React from 'react'

import { GenreMenuBar, SortMenu } from '../index'
import { TopBarProps } from '../../../../types'

import './styles.scss'
const TopBar: React.FC<TopBarProps> = (props) => {
  const { sortItems, filmsFound } = props

  return <div className={'top-bar'}>
    <div className={'top-bar__main'}>
      <GenreMenuBar />
      <SortMenu sortItems={sortItems}/>
    </div>
    <div className={'top-bar__info'}>
      <b>{filmsFound}</b>&nbsp; movies found
    </div>
  </div>
}

export default TopBar
