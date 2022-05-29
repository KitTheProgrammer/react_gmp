import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

// @ts-ignore
import { SearchBar, AddMovieButton } from '../index.ts'

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
