import React  from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
// @ts-ignore
import App from './App.tsx'
// @ts-ignore
import ErrorBoundary from './components/ErrorBoundary/index.tsx'

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
