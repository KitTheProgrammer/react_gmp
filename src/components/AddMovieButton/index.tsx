import React from 'react'

import './styles.scss'

const AddMovieButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <div className={'add-movie-wrapper'}>
    <span className={'main-logo'}><b>netflix</b>roulette</span>
    <button
      className={'add-movie-button'}
      onClick={onClick}
    >
      + ADD MOVIE
    </button>
  </div>
)

export default AddMovieButton
