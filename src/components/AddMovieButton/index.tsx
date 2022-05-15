import React, {useCallback} from 'react'

import './styles/styles.scss'

const AddMovieButton = (): React.ReactElement => {
  const handlePress = useCallback(() => {
    alert('Add movie pressed')
  }, [])

  return (
    <div className={'add-movie-wrapper'}>
      <span><b>netflix</b>roulette</span>
      <button
        className={'add-movie-button'}
        onClick={handlePress}
      >
        + ADD MOVIE
      </button>
    </div>
  )
}

export default AddMovieButton
