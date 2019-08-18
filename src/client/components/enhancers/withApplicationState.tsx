import * as React from 'react';
import { connect } from 'react-redux';
import boundActions from '../../redux/boundActions';
import { actionCreators } from '../../redux';

export default () => <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  class WithApplicationState extends React.Component<Pick<typeof actionCreators, 'applicationActions'>> {
    public componentDidMount() {
      const {
        applicationActions: { init },
      } = this.props;
      init();
    }
    public render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <WrappedComponent {...(this.props as P)} />;
    }
  }
  return connect(
    null,
    boundActions<any, any>('applicationActions'),
  )(WithApplicationState);
};
