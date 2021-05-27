import { combineReducers } from 'redux';

// Import reducers here
import snackbar from './snackbar';
// import zip from './zip';
import trending from './trending';

const rootReducer = combineReducers({
    snackbar,
    // zip,
    trending,
});

export default rootReducer;
