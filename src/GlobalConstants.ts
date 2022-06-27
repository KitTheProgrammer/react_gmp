import {
  GENRE_ALL,
  GENRE_COMEDY,
  GENRE_CRIME,
  GENRE_DOCUMENTARY,
  GENRE_HORROR,
  SORT_RELEASE,
  SORT_ALPHABET,
  SORT_ALPHABET_REVERSE
} from './utils/i18n'

export const searchBarPlaceholder = 'What do you want to watch?'
export const genreLabels = [GENRE_ALL, GENRE_DOCUMENTARY, GENRE_COMEDY, GENRE_HORROR, GENRE_CRIME]
export const sortEntries = { [SORT_RELEASE]: 0, [SORT_ALPHABET]: 1, [SORT_ALPHABET_REVERSE]: 2 }
export const sortItems = Object.keys(sortEntries)