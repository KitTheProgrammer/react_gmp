import React, { useState, useCallback } from 'react'
import { searchBarPlaceholder } from '../../GlobalConstants'

import './styles/styles.scss'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')

  const invokeSearch = useCallback(() => {
    alert(`Searched for "${searchInput}"`)
  }, [searchInput])

  return <div className={'search-bar'}>
    <input
      className={'search-bar__input'}
      value={searchInput}
      onChange={({ target: { value } }) => setSearchInput(value)}
      placeholder={searchBarPlaceholder}
    />
    <button className={'search-bar__search'} onClick={invokeSearch}>SEARCH</button>
  </div>
}

export default SearchBar
