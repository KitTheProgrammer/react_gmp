import React from 'react'
import MainPage from '../search'
import { getFilmsForSSR } from '../../api'
import { getGenreParams, getSearchParams, getSortParams } from '../../utils'

const SearchQuery: React.FC = ({ films }) => {
  return <MainPage films={films}/>
}

export async function getServerSideProps({ params: { searchQuery, sortBy, genre } }) {
  const films = await getFilmsForSSR({ ...getSortParams(sortBy), ...getGenreParams(genre), ...getSearchParams(searchQuery) })
  return { props: { filmsFromProp: films } }
}

export default SearchQuery
