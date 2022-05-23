import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export interface FilmProps {
  imgHref: string
  genre: string
  title: string
  releaseDate: number
  index: number
  selected: boolean
  onClick: React.Dispatch<React.SetStateAction<number>>
  onEdit: (txt: string) => void
  onDelete: (ind: number) => void
}

const Film: React.FC<FilmProps> = (props) => {
  const { imgHref, releaseDate, title, genre, index, selected, onClick, onDelete, onEdit } = props

  const [menuOpen, setMenuOpen] = useState(false)

  return <div
    className={`film${selected ? ' film-selected' : ''}`}
    onClick={() => onClick(index)}
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
      >x</button>
      <button onClick={() => onEdit(title)}>Edit</button>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
    <img src={imgHref} alt={title}/>
    <div className={'film__info'}>
      <div className={'film__info__top'}>
        <h2>{title}</h2>
        <h3>{releaseDate}</h3>
      </div>
      <span className={'film__info__bottom'}>{genre}</span>
    </div>
  </div>
}

Film.propTypes = {
  imgHref: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default Film
