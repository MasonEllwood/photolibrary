import { combineReducers } from 'redux';

// Import reducers here
import snackbar    from './snackbar';
import zip    from './zip';

const rootReducer = combineReducers({
  snackbar,
  zip,
});

export default rootReducer;
