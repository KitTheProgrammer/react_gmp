import React, { Component } from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  errorData: {
    error: null | unknown
    errorInfo: null | { componentStack: string }
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

  componentDidCatch(error: any, errorInfo: { componentStack: string }) {
    console.log(error, errorInfo)
    this.setState({ errorData: { error, errorInfo } })
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ paddingLeft: '1rem' }}>
        <h1>Something went wrong.</h1>
        {this.state.errorData.errorInfo?.componentStack.split('\n').map((it) => (<><span>{it}</span><br/></>))}
      </div>
    }

    return this.props.children || <>Something terrible happened</>
  }
}

export default ErrorBoundary
