import { connectRouter } from 'connected-react-router';
import { routerHistory } from '../../lib/routerHistory';

/**
 * State
 */
export const initialState = {
  action: undefined,
  location: { query: {} },
};

/**
 * Reducers
 */
export const reducers = connectRouter(routerHistory);
