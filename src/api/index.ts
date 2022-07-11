import React from 'react'
import { FilmData, GetFilmsParams, MovieDataFromServer } from '../types'
import { deleteMethod, filmsToMovies, getMethod, getParamsString, movieToFilm, postMethod, putMethod } from './utils'
import { setFilms, updateFilm } from '../redux/reducers/films'

export const getFilms = (params: GetFilmsParams | null = null) => async (dispatch: React.Dispatch<any>) => {
  const res = await getMethod(`movies${(params) ? `?${getParamsString(params)}` : ''}`)
  if (res.status === 200) {
    const data: { data: MovieDataFromServer[] } = await res.json()
    const formattedData: FilmData[] = data.data.map((m) => movieToFilm(m))
    dispatch(setFilms(formattedData))
  }
}

export const updateFilms = (params: FilmData) => async (dispatch: React.Dispatch<any>) => {
  const res = await putMethod('movies', filmsToMovies(params))
  if (res.status === 200) {
    const data: MovieDataFromServer = await res.json()
    dispatch(updateFilm(movieToFilm(data)))
  }
}

export const createFilm = (params: FilmData) => async (dispatch: React.Dispatch<any>) => {
  const res = await postMethod('movies', filmsToMovies(params))
  if (res.status === 200) {
    const data: MovieDataFromServer = await res.json()
    dispatch(updateFilms(movieToFilm(data)))
    return true
  }
  return false
}

export const deleteFilm = (id: number) => async (dispatch: React.Dispatch<any>) => {
  const res = await deleteMethod(`movies/${id}`)
  if (res.status === 200) {
    dispatch(deleteFilm(id))
  }
}
