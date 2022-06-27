import React from 'react'
import { FilmData, GetFilmsParams, MovieDataFromServer } from '../types'
import { getMethod, getParamsString } from './utils'
import { setFilms } from '../redux/reducers/films'

export const getFilms = (params: GetFilmsParams | null = null) => async (dispatch: React.Dispatch<any>) => {
    const res = await getMethod(`movies${(params) ? `?${getParamsString(params)}` : ''}`)
    if (res.status === 200) {
        const data: { data: MovieDataFromServer[] } = await res.json()
        const formattedData: FilmData[] = data.data.map((m) => ({
            id: m.id,
            imgHref: m.poster_path,
            genre: m.genres,
            title: m.title,
            releaseDate: new Date(m.release_date).getTime(),
            description: m.overview,
            rating: m.vote_average,
            runtime: m.runtime,
        }))
        dispatch(setFilms(formattedData))
    }
}