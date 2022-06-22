import React from 'react'

import { getTimeframeFormat } from '../../utils'

import './styles.scss'

export interface FormInputProps {
  label: string
  placeholder: string
  value: string
  onChange: (value: string) => void
  type?: string
  className?: string
}

const FormInput: React.FC<FormInputProps> = (props) => {
  const { label, placeholder, value, onChange, className, type } = props

  const getInput = () => {
    switch (type) {
      case 'textarea':
        return <textarea rows={2} placeholder={placeholder} value={value} onChange={({ target: { value } }) => onChange(value)}/>
      case 'number-type':
        return <input
          className={'number-type'}
          type={'number'}
          placeholder={getTimeframeFormat(Number(value))}
          min={0} value={''}
          onChange={({ target: { value: v } }) => {
            onChange(`${(Number(v) >= 1) ? Number(value) + 1 : Number(value) - 1}`)
          }}
        />
      default:
        return <input type={type || ''} placeholder={placeholder} value={value} onChange={({ target: { value } }) => onChange(value)}/>
    }
  }

  return <div className={`main-form-input ${className || ''}`}>
    <span>{label}</span>
    {getInput()}
  </div>
}

export default FormInput
