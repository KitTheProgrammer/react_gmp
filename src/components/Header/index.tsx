import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

import { SearchBar, AddMovieButton } from '../index'

const Header: React.FC<{ addNewFilm: () => void }> = ({ addNewFilm }): React.ReactElement => {

  return <div className={'header'}>
    <AddMovieButton onClick={addNewFilm}/>
    <SearchBar/>
  </div>
}

Header.propTypes = {
  addNewFilm: PropTypes.func.isRequired,
}

export default Header
