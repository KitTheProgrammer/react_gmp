import { Dispatch } from '@reduxjs/toolkit'
import { getFilms } from '../api'
import { getGenreParams, getSearchParams, getSortParams } from '../utils'

export const setSearchOptions = (genre: string, sortBy?: number, search?: string) => (dispatch: Dispatch<any>) => {
  dispatch(getFilms({ ...getSortParams(sortBy), ...getGenreParams(genre), ...getSearchParams(search) }))
}
