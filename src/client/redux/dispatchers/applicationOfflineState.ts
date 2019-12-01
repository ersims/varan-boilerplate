import { Store } from 'redux';
import { actionCreators } from '../modules/application';

// Exports
export const applicationOfflineState = (store: Pick<Store, 'dispatch'>): (() => void) => {
  const setOffline = () => store.dispatch(actionCreators.setOffline());
  const setOnline = () => store.dispatch(actionCreators.setOnline());
  window.addEventListener('offline', setOffline);
  window.addEventListener('online', setOnline);
  return () => {
    window.removeEventListener('offline', setOffline);
    window.removeEventListener('online', setOnline);
  };
};
