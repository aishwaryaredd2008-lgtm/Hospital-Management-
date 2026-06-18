import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    return this.state.error ? <h2>Something went wrong</h2> : this.props.children;
  }
}