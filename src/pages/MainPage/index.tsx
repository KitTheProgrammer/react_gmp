import React from 'react'
import PropTypes from 'prop-types'

import { Header, Body } from '../../components'

import './styles.scss'

export interface MainPageProps {
  testProp: string
}

const MainPage = ({ testProp }: MainPageProps): React.ReactElement => {

  return (
    <div className={'main-page'}>
      <Header/>
      <Body/>
      <div className={'main-page__footer'}>
        <span className={'main-logo'}><b>netflix</b>roulette</span>
      </div>
    </div>
  )
}

MainPage.propTypes = {
  testProp: PropTypes.string
}

export default MainPage
