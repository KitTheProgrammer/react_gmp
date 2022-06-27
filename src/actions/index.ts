import { Dispatch } from '@reduxjs/toolkit'
import { setSelectedGenre, setSelectedSortOption } from '../redux/reducers/films'
import { getFilms } from '../api'
import { genreLabels } from '../GlobalConstants'
import { getGenreParams, getSortParams } from '../utils'

export const setSortOption = (option: number) => (dispatch: Dispatch<any>, getState: any) => {
  const state = getState()
  const genre = state.films.selectedGenre

  dispatch(setSelectedSortOption(option))
  dispatch(getFilms({ ...getSortParams(option), ...getGenreParams(genre) }))
}

export const setGenreOption = (genre: string) => (dispatch: Dispatch<any>, getState: any) => {
  const state = getState()
  const sortOption = state.films.selectedSortOption

  dispatch(setSelectedGenre(genre))

  if (genre !== genreLabels[0]) {
    dispatch(getFilms({ ...getGenreParams(genre), ...getSortParams(sortOption) }))
  } else {
    dispatch(getFilms(getSortParams(sortOption)))
  }
}
