// Imports
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

// Types
interface IState {
  action: string;
  location: {
    hash: string;
    key: string;
    pathname: string;
    search: string;
    state?: any;
  };
}

// Actions
export const actions = {};

// Reducers
export default (history: History) => connectRouter(history);
