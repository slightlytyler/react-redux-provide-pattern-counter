import { combineReducers } from 'redux';
import countProvider from './providers/count.js';

export default combineReducers({
  count: countProvider.reducers,
});
