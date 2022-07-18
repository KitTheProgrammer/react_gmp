import { FilmData, MovieDataFromServer } from '../types'
import { getInputFormattedTime } from '../utils'

const defaultApiEndpoint = 'http://localhost:4000'

export const getMethod = async (endpoint: string): Promise<any> => {
  return await fetch(`${defaultApiEndpoint}/${endpoint}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const postMethod = async (endpoint: string, body: any): Promise<any> => {
  return await fetch(`${defaultApiEndpoint}/${endpoint}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
}

export const putMethod = async (endpoint: string, body: any): Promise<any> => {
  return await fetch(`${defaultApiEndpoint}/${endpoint}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })
}

export const deleteMethod = async (endpoint: string): Promise<any> => {
  return await fetch(`${defaultApiEndpoint}/${endpoint}`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const getParamsString = (params: any): string => {
  return Object.entries(params).map((it) => it.map((ti) => encodeURIComponent(`${ti}`)).join('=')).join('&')
}

export const filmsToMovies = (data: FilmData): MovieDataFromServer => {
  const {
    title,
    releaseDate,
    runtime,
    id,
    imgHref,
    genre,
    rating,
    description,
    tagline,
    vote_count,
    budget,
    revenue
  } = data

  return ({
    title,
    tagline: tagline || 'some',
    vote_average: Number(rating) || 1,
    vote_count: vote_count || 1,
    release_date: getInputFormattedTime(releaseDate),
    poster_path: imgHref,
    overview: description || '',
    budget: budget || 1,
    revenue: revenue || 1,
    runtime: Number(runtime) || 1,
    genres: genre,
    id,
  })
}

export const movieToFilm = (data: MovieDataFromServer): FilmData => ({
  id: data.id,
  imgHref: data.poster_path,
  genre: data.genres,
  title: data.title,
  releaseDate: new Date(data.release_date).getTime(),
  description: data.overview,
  rating: data.vote_average,
  runtime: data.runtime,
  tagline: data.tagline,
  budget: data.budget,
  revenue: data.revenue,
})
