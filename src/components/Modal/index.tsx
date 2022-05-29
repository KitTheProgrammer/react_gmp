import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export interface ModalProps {
  visible: boolean
  children: React.ReactNode
  title: string
  closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ visible, children, title, closeModal }) => {
  return <div className={`modal${(visible) ? ' modal__open' : ''}`}>
    <div className={'modal__open__inner'}>
      <div className={'modal__open__inner__header'}>
        <button className={'modal__open__inner__header__close-button'} onClick={closeModal}><i className="fa-solid fa-xmark"/></button>
        <span>{title}</span>
      </div>
      <div className={'modal__open__inner__body'}>
        {children}
      </div>
    </div>
  </div>
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}

export default Modal
