import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer, // name can be whatever you want
    loggedReducer //es6 same as loggedReducer: loggedReducer
});

export default allReducers;