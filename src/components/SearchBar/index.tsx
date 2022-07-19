import React, { useState, useCallback, useEffect } from 'react'
import { searchBarPlaceholder } from '../../GlobalConstants'

import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '../../hooks'

import './styles.scss'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const navigate = useNavigate()
  const { searchQuery } = useParams()
  const query = useQuery()
  // const pathname = useLocation().pathname

  useEffect(() => {
    searchQuery && setSearchInput(searchQuery)
  }, [searchQuery])

  const invokeSearch = useCallback(() => {
    const stringQuery = query.toString()
    navigate(`/search${searchInput ? `/${searchInput}` : '' }${stringQuery ? `?${stringQuery}` : ''}`, { replace: true })
  }, [searchInput, query])

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
