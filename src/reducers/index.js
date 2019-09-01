import {combineReducers} from 'redux';
import userReducers from './reducer-user';
import activeUserReducer from './reducer-active-user';

const allReducers = combineReducers({
    users: userReducers,
    activeUser: activeUserReducer
})

export default allReducers;