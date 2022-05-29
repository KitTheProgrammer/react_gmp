import React from 'react'

import './styles.scss'

import { SearchBar, AddMovieButton } from '../index'

const Header: React.FC<{ addNewFilm: () => void }> = ({ addNewFilm }): React.ReactElement => (
  <div className={'header'}>
    <AddMovieButton onClick={addNewFilm}/>
    <SearchBar/>
  </div>
)

export default Header
