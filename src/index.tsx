import React  from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { Provider } from 'react-redux'
import { store } from './redux'

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
