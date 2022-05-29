import React from 'react'
import PropTypes from 'prop-types'

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

  return <div className={`main-form-input ${className || ''}`}>
    <span>{label}</span>
    {(type === 'textarea')
      ? <textarea rows={2} placeholder={placeholder} value={value} onChange={({ target: { value } }) => onChange(value)}/>
      : (type === 'number-type')
        ? <input
          className={'number-type'}
          type={'number'}
          placeholder={`${(Number(value) > 60) ? `${Math.floor(Number(value) / 60)}h ${Number(value) % 60}min` : `${value}min`}`}
          min={0} value={''}
          onChange={({ target: { value: v } }) => {
            onChange(`${(Number(v) >= 1) ? Number(value) + 1 : Number(value) - 1}`)
          }}
        />
        : <input type={type || ''} placeholder={placeholder} value={value} onChange={({ target: { value } }) => onChange(value)}/>
    }
  </div>
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FormInput
