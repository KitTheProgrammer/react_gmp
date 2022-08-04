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
    setError: (state, action: PayloadAction<FilmsState['error']>) => {
      state.error = action.payload
    }
  }
})

export const {
  setFilms,
  setSelectedFilm,
  updateFilm,
  setError,
} = filmsSlice.actions

export default filmsSlice.reducer
