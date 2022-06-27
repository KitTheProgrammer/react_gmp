import React from 'react'

export interface FilmData {
  id: number
  imgHref: string
  genre: string[]
  title: string
  releaseDate: number
  description?: string
  rating?: number
  runtime?: number
}

export interface BodyProps {
  films: FilmData[]
  onEditVideo: () => void
  onDeleteVideo: (ind: number) => void
  selectedFilm: FilmData | null
  setSelectedFilm: React.Dispatch<React.SetStateAction<any>>
}

export interface EditMovieModalProps {
  visible: boolean
  title: string
  closeModal: () => void
  filmData?: FilmData | null
  submitEdit: (data: any) => void
}

export interface FilmProps {
  imgHref: string
  genre: string[]
  title: string
  releaseDate: number
  index: number
  selected: boolean
  onClick: React.Dispatch<React.SetStateAction<FilmData>>
  onEdit: () => void
  onDelete: (ind: number) => void
  data: FilmData
}

export interface GenreMenuBarProps {
  genre: string
  setGenre: (genre: string) => void
}

export interface ErrorBoundaryState {
  hasError: boolean
  errorData: {
    error: null | unknown
    errorInfo: null | { componentStack: string }
  }
}

export interface ErrorBoundaryProps {
  children: React.ReactElement
}

export interface SortMenuProps {
  sortItems: string[]
  currentSortItem: number
  setSortItem: (option: number) => void
}

export interface FormSelectProps {
  label: string
  value: string[]
  placeholder: string
  className?: string
  onChange: (value: string[]) => void
  data: string[]
}

export interface FormInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: string
  className?: string
}

export interface ModalProps {
  visible: boolean
  children: React.ReactNode
  title: string
  closeModal: () => void
}

export interface TopBarProps extends GenreMenuBarProps, SortMenuProps {
  filmsFound: number
}

export interface HeaderProps {
  addNewFilm: () => void
  selectedFilm: FilmData | null
  close: () => void
}

export interface MovieDataFromServer {
  title: string
  tagline: string
  vote_average: number
  vote_count: number
  release_date: string
  poster_path: string
  overview: string
  budget: number
  revenue: number
  runtime: number
  genres: string[]
  id: number
}

export interface GetMoviesResponse {
  data: MovieDataFromServer[]
  total: number
  offset: number
  limit: number
}

export interface GetFilmsParams {
  sortBy?: string
  sortOrder?: 'desc' | 'asc'
  search?: string
  searchBy?: 'title' | 'genres'
  filter?: string[]
  offset?: string
  limit?: string
}