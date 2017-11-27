import { combineReducers } from 'redux';

import userReducers from './userReducers';
import toggleReducers from './toggleReducers';

export default combineReducers({
  userStore: userReducers,
  toggleStore: toggleReducers
});
