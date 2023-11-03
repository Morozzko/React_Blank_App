import { Component, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  errorComponent: ReactNode
}

interface IState {
  hasError: boolean
}

export class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    console.log(error)

    return { hasError: true }
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo) {}

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent
    }

    return this.props.children
  }
}
