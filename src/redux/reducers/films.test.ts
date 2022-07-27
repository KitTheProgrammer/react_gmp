import reducer, { setFilms, setSelectedFilm, updateFilm, setError } from './films'
import { genreLabels } from '../../GlobalConstants'

const films = [
  {
    budget: 100000000,
    description: 'Nearly 10 years have passed since Sarah Connor was targeted for termination by a cyborg from the future. Now her son, John, the future leader of the resistance, is the target for a newer, more deadly terminator. Once again, the resistance has managed to send a protector back to attempt to save John and his mother Sarah.',
    genre: ['Action', 'Thriller', 'Science Fiction'],
    id: 280,
    imgHref: 'https://image.tmdb.org/t/p/w500/2y4dmgWYRMYXdD1UyJVcn2HSd1D.jpg',
    rating: 7.8,
    releaseDate: 678499200000,
    revenue: 520000000,
    runtime: 137,
    tagline: 'It\'s nothing personal.',
    title: 'Terminator 2: Judgment Day',
  },
  {
    budget: 200000000,
    description: 'It\'s been 10 years since John Connor saved Earth from Judgment Day, and he\'s now living under the radar, steering clear of using anything Skynet can trace. That is, until he encounters T-X, a robotic assassin ordered to finish what T-1000 started. Good thing Connor\'s former nemesis, the Terminator, is back to aid the now-adult Connor … just like he promised.',
    genre: ['Action', 'Thriller', 'Science Fiction'],
    id: 296,
    imgHref: 'https://image.tmdb.org/t/p/w500/lz4xYdF1n09lyiCfZWtWT44SZiG.jpg',
    rating: 5.9,
    releaseDate: 1057104000000,
    revenue: 435000000,
    runtime: 109,
    tagline: 'The Machines Will Rise.',
    title: 'Terminator 3: Rise of the Machines',
  }
]

const initialState = {
  films: [],
  selectedFilm: null,
  selectedGenre: genreLabels[0],
  selectedSortOption: 0,
  error: { error: false, errorMessage: '' }
}

describe(('film reducer'), () => {
  test('should return initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('setFilms', () => {
    expect(reducer(initialState, setFilms(films))).toEqual({ ...initialState, films })
  })

  test('setSelectedFilm', () => {
    expect(reducer(initialState, setSelectedFilm(films[0]))).toEqual({ ...initialState, selectedFilm: films[0] })
    expect(reducer(initialState, setSelectedFilm(films[1].id))).toEqual({ ...initialState, selectedFilm: null })
    expect(reducer({ ...initialState, films }, setSelectedFilm(films[1].id))).toEqual({ ...initialState, films, selectedFilm: films[1] })
  })

  test('updateFilm', () => {

    expect(reducer(initialState, updateFilm(films[0]))).toEqual({ ...initialState, films: [films[0]] })
    expect(reducer({ ...initialState, films }, updateFilm({ ...films[0], id: films[1].id }))).toEqual({ ...initialState, films: [ films[0], { ...films[0], id: films[1].id } ] })
  })

  test('setError', () => {
    const errorData = { error: true, errorMessage: 'Error string test!'}
    expect(reducer(initialState, setError(errorData))).toEqual({ ...initialState, error: errorData })
  })
})
