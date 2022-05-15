import React from 'react'

import './styles/styles.scss'

// @ts-ignore
import { SearchBar, AddMovieButton } from '../index.ts'

const Header = (): React.ReactElement => {

  return <div className={'header'}>
    <AddMovieButton/>
    <SearchBar/>
  </div>
}

export default Header