import React, { useState, useCallback, useEffect } from 'react'
import { genreLabels, searchBarPlaceholder } from '../../GlobalConstants'

// import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from '../../hooks'
import { useRouter } from 'next/router'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const router = useRouter()
  const query = router.query
  const [searchQuery] = query.slug as string || []

  useEffect(() => {
    searchQuery && setSearchInput(searchQuery)
  }, [searchQuery])

  const invokeSearch = useCallback(() => {
    delete query.slug
    router.push({ pathname: `/search${searchInput ? `/${searchInput}` : ''}`, query })
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
