import React from 'react'

import './styles.scss'

// @ts-ignore
import { SearchBar, AddMovieButton } from '../index.ts'

const Header = (): React.ReactElement => {

  return <div className={'header'}>
    <AddMovieButton/>
    <SearchBar/>
  </div>
}

export default Header
