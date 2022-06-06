import React from 'react'

// @ts-ignore
import { SearchBar, AddMovieButton } from '../index.ts'
// @ts-ignore
import { FilmData } from '../Body/index.tsx'
// @ts-ignore
import { getTimeframeFormat } from '../../utils/index.ts'

import './styles.scss'

export interface HeaderProps {
  addNewFilm: () => void
  selectedFilm: FilmData | null
  close: () => void
}

const Header: React.FC<HeaderProps> = ({ addNewFilm, selectedFilm, close }) => (
  <div className={`header${(selectedFilm) ? ' header--film' : ''}`}>
    {!selectedFilm
      ? <>
        <AddMovieButton onClick={addNewFilm}/>
        <SearchBar/>
      </>
      : <>
        <div className={'header__head'}>
          <span className={'main-logo'}><b>netflix</b>roulette</span>
          <button onClick={close}><i className="fa-solid fa-magnifying-glass"/></button>
        </div>
        <div className={'header__body'}>
          <img src={selectedFilm.imgHref} alt={selectedFilm.title}/>
          <div className={'header__body__data'}>
            <div className={'header__body__data__row'}>
              <span className={'header__body__data__title'}>{selectedFilm.title}</span>
              <span className={'header__body__data__rating'}>{selectedFilm.rating || 0}</span>
              <span className={'header__body__data__genre'}>{selectedFilm.genre.join(', ')}</span>
            </div>
            <div className={'header__body__data__row'}>
              <span className={'header__body__data__release'}>{new Date(selectedFilm.releaseDate).getFullYear() || 'Unknown'}</span>
              <span className={'header__body__data__runtime'}>
                {selectedFilm.runtime ? getTimeframeFormat(Number(selectedFilm.runtime)) : 'Unknown'}
              </span>
            </div>
            <div className={'header__body__data__row'}>
              <span className={'header__body__data__description'}>{selectedFilm.description}</span>
            </div>
          </div>
        </div>
      </>}
  </div>
)

export default Header
