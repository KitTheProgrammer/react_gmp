import React from 'react'
import { useField } from 'formik'

import { getInputFormattedTime, getTimeframeFormat } from '../../utils'
import { FormInputProps } from '../../types'

import './styles.scss'

const FormInput: React.FC<FormInputProps> = (props) => {
  const { label, placeholder, className, type, name } = props

  const [field, meta, helpers] = useField(name)
  const { value } = meta
  const { setValue } = helpers

  const getInput = () => {
    switch (type) {
      case 'textarea':
        return <textarea
          {...field}
          rows={2}
          placeholder={placeholder}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
      case 'number-type':
        return <input
          {...field}
          className={'number-type'}
          type={'number'}
          placeholder={getTimeframeFormat(Number(value))}
          min={0} value={''}
          onChange={({ target: { value: v } }) => {
            setValue(`${(Number(v) >= 1) ? Number(value) + 1 : Number(value) - 1}`)
          }}
        />
      case 'date':
        return <input
          {...field}
          type={type || ''}
          placeholder={placeholder}
          value={getInputFormattedTime(value)}
          onChange={({ target: { value } }) => setValue(value)}
        />
      default:
        return <input
          {...field}
          type={type || ''}
          placeholder={placeholder}
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
    }
  }

  return <div className={`main-form-input ${className || ''}`}>
    <span>{label}</span>
    {meta.error && meta.touched && <div>{meta.error}</div>}
    {getInput()}
  </div>
}

export default FormInput
