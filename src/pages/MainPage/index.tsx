import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../../components'

import './styles/styles.scss'

export interface MainPageProps {
  testProp: string
}

const MainPage = ({ testProp }: MainPageProps): React.ReactElement => {

  return (
    <div className={'main-page'}>
      <Header/>
    </div>
  )
}

MainPage.propTypes = {
  testProp: PropTypes.string
}

export default MainPage
