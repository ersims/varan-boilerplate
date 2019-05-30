/* tslint:disable prefer-array-literal */
// Dependencies
import { MapDispatchToPropsParam } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import pick from 'lodash/pick';
import { actionCreators } from './index';

// Helpers
export default <TDispatchProps, TOwnProps>(
  actions?: keyof typeof actionCreators | (keyof typeof actionCreators)[],
): MapDispatchToPropsParam<TDispatchProps, TOwnProps> | undefined => {
  if (!actions) return undefined;
  return function mapDispatchToProps(dispatch: Dispatch) {
    return Object.entries(pick(actionCreators, actions)).reduce(
      (acc, [actionName, actionCreator]) => {
        (acc as any)[actionName] = bindActionCreators(actionCreator, dispatch);
        return acc;
      },
      // eslint-disable-next-line @typescript-eslint/no-object-literal-type-assertion
      {} as TDispatchProps,
    );
  };
};
