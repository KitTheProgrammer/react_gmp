import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { FormInput, FormSelect, Modal } from '../../../../components'
import { genreLabels } from '../../../../GlobalConstants'
import { EditMovieModalProps } from '../../../../types'

import './styles.scss'

const validationScheme = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  releaseDate: Yup.string().required('Release date is required'),
  imgHref: Yup
    .string()
    .matches(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)/,
      'Should match url string!',
    )
    .required('Image url is required'),
  genre: Yup.array().required('Genre is required'),
  rating: Yup.number().required('Rating is required'),
  runtime: Yup.number().required('Movie runtime is required'),
  description: Yup.string().required('Description is required'),
})

const EditMovieModal: React.FC<EditMovieModalProps> = (props) => {
  const { visible, closeModal, filmData, submitEdit } = props

  return <Modal visible={visible} title={filmData ? 'edit movie' : 'add movie'} closeModal={closeModal}>
    <div className={'edit-modal-form'}>
      <Formik
        initialValues={{
          title: filmData?.title || '',
          releaseDate: filmData?.releaseDate || new Date().getTime(),
          genre: filmData?.genre || [],
          imgHref: filmData?.imgHref || '',
          rating: filmData?.rating || 0,
          runtime: filmData?.runtime || 0,
          description: filmData?.description || '',
        }}
        onSubmit={(data) => {
          submitEdit(data)
          closeModal()
        }}
        validationSchema={validationScheme}
      >
        <Form>
          <div className={'modal-form-row'}>
            <FormInput label={'Title'} placeholder={'Title'} name='title'/>
            <FormInput
              label={'Release date'}
              placeholder={'Release date'}
              type={'date'}
              name='releaseDate'
            />
          </div>
          <div className={'modal-form-row'}>
            <FormInput label={'Poster url'} placeholder={'Poster url'} name='imgHref'/>
            <FormInput
              label={'Rating'}
              placeholder={'Rating'}
              type={'number'}
              name='rating'
            />
          </div>
          <div className={'modal-form-row'}>
            <FormSelect
              label={'Genre'}
              placeholder={'Genre'}
              data={genreLabels.slice(1)}
              name='genre'
            />
            <FormInput
              label={'Runtime'}
              placeholder={'Runtime'}
              type={'number-type'}
              name='runtime'
            />
          </div>
          <div className={'modal-form-row'}>
            <FormInput
              label={'Description'}
              placeholder={'Description'}
              type={'textarea'}
              name='description'
            />
          </div>
          <div className={'modal-button-row'}>
            <button className={'button-reset'} onClick={closeModal}>Reset</button>
            <button type='submit' className={'button-submit'}>Submit</button>
          </div>
        </Form>
      </Formik>
    </div>
  </Modal>
}

export default EditMovieModal
