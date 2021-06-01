import { combineReducers } from 'redux';

// Import reducers here
import snackbar from './snackbar';
import trending from './trending';

const rootReducer = combineReducers({
    snackbar,
    trending,
});

export default rootReducer;
