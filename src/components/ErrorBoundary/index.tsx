import React, { Component } from 'react'

import { Error } from './Error'

const initialState = {
  hasError: false,
}

export class ErrorBoundary extends Component<{}, typeof initialState> {
  state = initialState

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  resetError = () => {
    this.setState(initialState)
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

    if (hasError) {
      return <Error resetError={this.resetError} />
    }

    return children
  }
}
