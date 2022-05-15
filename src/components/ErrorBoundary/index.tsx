import React, { Component } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  errorData: {
    error: null | unknown
    errorInfo: null | unknown
  }
}

interface ErrorBoundaryProps {
  children: React.ReactElement
}

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

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error, errorInfo)
    this.setState({ errorData: { error, errorInfo } })
  }

  render() {
    if (this.state.hasError) {
      return <h1>
        Something went wrong.
        {JSON.stringify(this.state.errorData)}
      </h1>
    }

    return this.props.children || <>Something terrible happened</>
  }
}

export default ErrorBoundary
