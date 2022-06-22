import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilmData } from '../../types'
import { genreLabels } from '../../GlobalConstants'

interface FilmsState {
  films: FilmData[]
  selectedFilm: FilmData | null
  selectedGenre: string
  selectedSortOption: number
}

const initialState: FilmsState = {
  films: [],
  selectedFilm: null,
  selectedGenre: genreLabels[0],
  selectedSortOption: 0,
}

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: (state, action: PayloadAction<FilmData[]>) => {
      state.films = action.payload
    },
    setSelectedFilm: (state, action: PayloadAction<FilmData | null>) => {
      state.selectedFilm = action.payload
    },
    setSelectedGenre: (state, action: PayloadAction<string>) => {
      state.selectedGenre = action.payload
    },
    setSelectedSortOption: (state, action: PayloadAction<number>) => {
      state.selectedSortOption = action.payload
    }
  }
})

export const { setFilms, setSelectedFilm, setSelectedGenre, setSelectedSortOption } = filmsSlice.actions

export default filmsSlice.reducer
