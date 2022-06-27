import React, { Component } from 'react'
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      errorData: {
        error: null,
        errorInfo: null,
      }
    }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: { componentStack: string }) {
    console.log(error, errorInfo)
    this.setState({ errorData: { error, errorInfo } })
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ paddingLeft: '1rem' }}>
        <h1>Something went wrong. We are sowwy</h1>
      </div>
    }

    return this.props.children
  }
}

export default ErrorBoundary
