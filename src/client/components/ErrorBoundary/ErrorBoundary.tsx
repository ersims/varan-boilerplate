import React, { Component, ReactNode } from 'react';
import { GenericError } from '../../pages/errors/GenericError/GenericError';

// Exports
export class ErrorBoundary extends Component<{ children: ReactNode }> {
  // eslint-disable-next-line react/state-in-constructor
  public state: { error?: Error } = {};

  public static getDerivedStateFromError(error: Error): { error: Error } {
    return { error };
  }

  render(): ReactNode {
    const { children } = this.props;
    const { error } = this.state;
    return error ? <GenericError error={error} /> : children;
  }
}
