import { Dispatch } from '@reduxjs/toolkit'
import { getFilms } from '../api'
import { getGenreParams, getSortParams } from '../utils'

export const setSearchOptions = (genre: string, sortBy: number) => (dispatch: Dispatch<any>) => {
  dispatch(getFilms({ ...getSortParams(sortBy), ...getGenreParams(genre) }))
}
