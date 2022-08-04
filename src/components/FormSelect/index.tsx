import React, { useCallback, useRef, useState } from 'react'

import { ArrowDown } from '../../assets/icons'
import { FormSelectProps } from '../../types'

import { useOnClickOutside } from '../../hooks'
import { useField } from 'formik'

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { label, placeholder, className, data, name } = props
  const [isOpen, setIsOpen] = useState(false)
  const [field, meta, helpers] = useField(name)
  const { value } = meta
  const { setValue } = helpers
  const selectRef = useRef(null)

  useOnClickOutside(selectRef, () => setIsOpen(false))
  
  const handleChange = useCallback((val: string) => {
    if (value.includes(val)) {
      setValue(value.filter((it: string) => it.toLowerCase() !== val.toLowerCase()))
    } else {
      setValue([ ...value, val ])
    }
  }, [setValue, value])

  return <div className={`main-form-select ${className || ''}`}>
    <span className={'main-form-select__label'}>{label}</span>
    {meta.error && meta.touched && <div>{meta.error}</div>}
    <div
      className={`main-form-select__select${(isOpen) ? ' main-form-select__select__open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      ref={selectRef}
    >
      <span className={'main-form-select__select__value'}>{value?.length ? value.join(', ') : placeholder}</span>
      <ArrowDown/>
      <div className={'main-form-select-panel'}>
        {data.map((it, ind) => {
          return <div className={'main-form-select-panel__item'} onClick={() => {
            handleChange(it)
            setIsOpen(true)
          }} key={`selectOption_${ind}_${it}`}>
            <input
              {...field}
              type={'checkbox'}
              checked={value.map((v: string) => v.toLowerCase()).includes(it.toLowerCase())}
              onChange={() => handleChange(it)}
            />
            <span>{it}</span>
          </div>
        })}
      </div>
    </div>
  </div>
}

export default FormSelect
