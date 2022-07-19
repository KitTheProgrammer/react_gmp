import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilmData } from '../../types'
import { genreLabels } from '../../GlobalConstants'

interface FilmsState {
  films: FilmData[]
  selectedFilm: FilmData | null
  selectedGenre: string
  selectedSortOption: number
  error: { error: boolean, errorMessage: string }
}

const initialState: FilmsState = {
  films: [],
  selectedFilm: null,
  selectedGenre: genreLabels[0],
  selectedSortOption: 0,
  error: { error: false, errorMessage: '' }
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<FilmData[]>) => {
      state.films = action.payload
    },
    setSelectedFilm: (state, action: PayloadAction<FilmData | number | null>) => {
      if (typeof action?.payload === 'number') {
        const currFilm = state.films.find((film) => Number(film.id) === action.payload)
        if (currFilm) state.selectedFilm = currFilm
      } else {
        state.selectedFilm = action.payload
      }
    },
    setSelectedGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenre = action.payload
    },
    setSelectedSortOption: (state, action: PayloadAction<number>) => {
      state.selectedSortOption = action.payload
    },
    updateFilm: (state, action: PayloadAction<FilmData>) => {
      const { payload } = action
      const filmsCopy = [...state.films]
      const filmInd = filmsCopy.findIndex((it) => it.id === payload.id)
      if (filmInd !== -1) {
        filmsCopy[filmInd] = payload
        state.films = filmsCopy
      } else {
        state.films = [...filmsCopy, payload]
      }
    },
    deleteFilm: (state, action: PayloadAction<number>) => {
      const { payload } = action
      const filmsCopy = [...state.films]
      const filmInd = filmsCopy.findIndex((it) => it.id === payload)
      if (filmInd !== -1) {
        filmsCopy.splice(filmInd, 0)
        state.films = filmsCopy
      }
    },
    setError: (state, action: PayloadAction<FilmsState['error']>) => {
      state.error = action.payload
    }
  }
})

export const {
  setFilms,
  setSelectedFilm,
  setSelectedGenre,
  setSelectedSortOption,
  updateFilm,
  deleteFilm,
  setError,
} = filmsSlice.actions

export default filmsSlice.reducer
