import React, { useCallback, useRef, useState } from 'react'

import { ArrowDown } from '../../assets/icons'
import { FormSelectProps } from '../../types'

import './styles.scss'
import { useOnClickOutside } from '../../hooks'

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { label, value, placeholder, className, onChange, data } = props
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  useOnClickOutside(selectRef, () => setIsOpen(false))
  
  const handleChange = useCallback((val: string) => {
    if (value.includes(val)) {
      onChange(value.filter((it) => it.toLowerCase() !== val.toLowerCase()))
    } else {
      onChange([ ...value, val ])
    }
  }, [onChange, value])

  return <div className={`main-form-select ${className}`}>
    <span className={'main-form-select__label'}>{label}</span>
    <div
      className={`main-form-select__select${(isOpen) ? ' main-form-select__select__open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      ref={selectRef}
    >
      <span className={'main-form-select__select__value'}>{value?.length ? value.join(', ') : placeholder}</span>
      <ArrowDown/>
      <div className={'main-form-select-panel'}>
        {data.map((it) => {
          return <div className={'main-form-select-panel__item'} onClick={() => {
            handleChange(it)
            setIsOpen(true)
          }}>
            <input
              type={'checkbox'}
              checked={value.map((v) => v.toLowerCase()).includes(it.toLowerCase())}
              onClick={() => handleChange(it)}
            />
            <span>{it}</span>
          </div>
        })}
      </div>
    </div>
  </div>
}

export default FormSelect
