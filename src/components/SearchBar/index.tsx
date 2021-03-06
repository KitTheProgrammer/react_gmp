import React, { useState, useCallback } from 'react'
// @ts-ignore
import { searchBarPlaceholder } from '../../GlobalConstants.ts'

import './styles.scss'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  const invokeSearch = useCallback(() => {
    alert(`Searched for "${searchInput}".`)
  }, [searchInput])

  return <div className={'search-bar-wrapper'}>
    <span>FIND YOUR MOVIE</span>
    <div className={'search-bar'}>
      <input
        className={'search-bar__input'}
        value={searchInput}
        onChange={({ target: { value } }) => setSearchInput(value)}
        placeholder={searchBarPlaceholder}
      />
      <button className={'search-bar__search'} onClick={invokeSearch}>SEARCH</button>
    </div>
  </div>
}

export default SearchBar
