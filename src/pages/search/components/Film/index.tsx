import React, { useState } from 'react'

import { FilmProps } from '../../../../types'

const Film: React.FC<FilmProps> = (props) => {
  const { imgHref, releaseDate, title, genre, index, selected, onClick, onDelete, onEdit, data } = props

  const [menuOpen, setMenuOpen] = useState(false)

  return <div
    className={`film${selected ? ' film-selected' : ''}`}
    onClick={() => onClick(data)}
    role='button'
    tabIndex={0}
  >
    <div
      role='button'
      className={`film__menu${(menuOpen) ? ' film__menu__open' : ''}`}
      onClick={() => setMenuOpen(true)}
    >
      <div className={'film__menu__ball'} style={{ marginTop: '5px' }}/>
      <div className={'film__menu__ball'}/>
      <div className={'film__menu__ball'} style={{ marginBottom: '5px' }}/>
    </div>
    <div
      role='button'
      tabIndex={0}
      className={`film__menu__inner${(menuOpen) ? ' film__menu__inner__open' : ''}`}
      onBlur={() => setMenuOpen(false)}
    >
      <button
        className={'film__menu__inner__close'}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setMenuOpen(false)
        }}
      ><i className="fa-solid fa-xmark"/></button>
      <button onClick={onEdit}>Edit</button>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
    <div className={'film__image-wrapper'}>
      <img src={imgHref} alt={title}/>
    </div>
    <div className={'film__info'}>
      <div className={'film__info__top'}>
        <h2>{title}</h2>
        <h3>{new Date(releaseDate).getFullYear()}</h3>
      </div>
      <span className={'film__info__bottom'}>{genre.join(', ')}</span>
    </div>
  </div>
}

export default Film
