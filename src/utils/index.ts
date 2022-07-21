import { GetFilmsParams } from '../types'
import { genreLabels, sortEntries } from '../GlobalConstants'
import { SORT_ALPHABET, SORT_ALPHABET_REVERSE, SORT_RELEASE } from './i18n'

export const getInputFormattedTime = (d: string | number) => {
  const date = new Date(d)
  const year = date.getFullYear()
  const day = date.getDay()
  const month = date.getMonth() + 1
  return `${year}-${(month < 10) ? `0${month}` : month}-${(day < 10) ? `0${day}` : day}`
}

export const getTimeframeFormat = (value: number) => {
  return `${(value > 60) ? `${Math.floor(value / 60)}h ${value % 60}min` : `${value}min`}`
}

export const getSortParams = (option: number): GetFilmsParams => {
  switch (option) {
  case (sortEntries[SORT_RELEASE]): return { sortBy: 'release_date', sortOrder: 'desc' }
  case (sortEntries[SORT_ALPHABET]): return { sortBy: 'title', sortOrder: 'asc' }
  case (sortEntries[SORT_ALPHABET_REVERSE]): return { sortBy: 'title', sortOrder: 'desc' }
  default: return { sortBy: 'release_date', sortOrder: 'desc' }
  }
}

export const getGenreParams = (option: string): GetFilmsParams => option !== genreLabels[0] ? { filter: [ option ] } : {}
