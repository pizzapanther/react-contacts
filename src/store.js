import { createStore } from 'redux';
import contacts from './reducers';

var store = createStore(
  contacts,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;