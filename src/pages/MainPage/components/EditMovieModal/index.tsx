import React, { useCallback, useEffect, useState } from 'react'

import { FormInput, FormSelect, Modal } from '../../../../components'
import { getInputFormattedTime } from '../../../../utils'
import { genreLabels } from '../../../../GlobalConstants'

import './styles.scss'
import {EditMovieModalProps} from '../../../../types'

const EditMovieModal: React.FC<EditMovieModalProps> = (props) => {
  const { visible, closeModal, filmData, submitEdit } = props
  
  const [title, setTitle] = useState('')
  const [releaseDate, setReleaseDate] = useState(0)
  const [url, setUrl] = useState('')
  const [rating, setRating] = useState(0)
  const [genre, setGenre] = useState([] as string[])
  const [runtime, setRuntime] = useState(0)
  const [description, setDescription] = useState('')
  
  useEffect(() => {
    setTitle(filmData?.title || '')
    setReleaseDate(filmData?.releaseDate || new Date().getTime())
    setUrl(filmData?.imgHref || '')
    setRating(filmData?.rating || 0)
    setGenre(filmData?.genre || [])
    setRuntime(filmData?.runtime || 0)
    setDescription(filmData?.description || '')
  }, [filmData])
  
  const handleSubmit = useCallback(() => {
    submitEdit({
      title,
      genre,
      releaseDate,
      imgHref: url,
      rating,
      runtime,
      description,
    })
    closeModal()
  }, [closeModal, description, genre, rating, releaseDate, runtime, submitEdit, title, url])

  return <Modal visible={visible} title={'edit movie'} closeModal={closeModal}>
    <div className={'edit-modal-form'}>
      <div className={'modal-form-row'}>
        <FormInput label={'Title'} placeholder={'Title'} value={title} onChange={setTitle}/>
        <FormInput
          label={'Release date'}
          placeholder={'Release date'}
          value={getInputFormattedTime(releaseDate)}
          onChange={(v) => setReleaseDate(new Date(v).getTime())}
          type={'date'}
        />
      </div>
      <div className={'modal-form-row'}>
        <FormInput label={'Movie url'} placeholder={'Movie url'} value={url} onChange={setUrl}/>
        <FormInput
          label={'Rating'}
          placeholder={'Rating'}
          value={String(rating)}
          onChange={(v) => setRating(Number(v))}
          type={'number'}
        />
      </div>
      <div className={'modal-form-row'}>
        <FormSelect label={'Genre'} placeholder={'Genre'} value={genre} onChange={setGenre} data={genreLabels.slice(1)}/>
        <FormInput
          label={'Runtime'}
          placeholder={'Runtime'}
          value={`${runtime}`}
          onChange={(v) => setRuntime(Number(v))}
          type={'number-type'}
        />
      </div>
      <div className={'modal-form-row'}>
        <FormInput label={'Description'} placeholder={'Description'} value={description} onChange={setDescription} type={'textarea'}/>
      </div>
      <div className={'modal-button-row'}>
        <button className={'button-reset'} onClick={closeModal}>Reset</button>
        <button className={'button-submit'} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  </Modal>
}

export default EditMovieModal
