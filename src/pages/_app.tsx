import React from 'react'
import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import '@fortawesome/fontawesome-free/css/all.css'

import { store } from '../redux'

import './search/styles.scss'
import './search/components/GenreMenuBar/styles.scss'
import './search/components/TopBar/styles.scss'
import './search/components/Film/styles.scss'
import './search/components/EditMovieModal/styles.scss'
import './search/components/SortMenu/styles.scss'
import '../index.scss'
import '../components/SearchBar/styles.scss'
import '../components/FormInput/styles.scss'
import '../components/AddMovieButton/styles.scss'
import '../components/Header/styles.scss'
import '../components/Body/styles.scss'
import '../components/FormSelect/styles.scss'
import '../components/Modal/styles.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}