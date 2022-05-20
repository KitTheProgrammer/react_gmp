import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export interface FilmProps {
  imgHref: string
  genre: string
  title: string
  releaseDate: number
  index?: number
}

const Film: React.FC<FilmProps> = (props) => {
  const { imgHref, releaseDate, title, genre, index } = props

  return <div className={'film'} key={`${releaseDate}_${title}_${genre}_${index}`}>
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
  index: PropTypes.number,
}

export default Film
