import React from 'react'

import './styles.scss'

import { SearchBar, AddMovieButton } from '../index'

const Header = (): React.ReactElement => {

  return <div className={'header'}>
    <AddMovieButton/>
    <SearchBar/>
  </div>
}

export default Header
