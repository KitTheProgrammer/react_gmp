import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

console.log('aaa', process.env.TEST_VAR)

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
