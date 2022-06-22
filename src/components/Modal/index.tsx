import React from 'react'

import { ModalProps } from '../../types'

import './styles.scss'

const Modal: React.FC<ModalProps> = ({ visible, children, title, closeModal }) => {
  return <div className={`modal${(visible) ? ' modal--open' : ''}`}>
    <div className={'modal__inner'}>
      <div className={'modal__inner__header'}>
        <button className={'modal__inner__header__close-button'} onClick={closeModal}><i className="fa-solid fa-xmark"/></button>
        <span>{title}</span>
      </div>
      <div className={'modal__inner__body'}>
        {children}
      </div>
    </div>
  </div>
}

export default Modal
