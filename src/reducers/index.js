import {combineReducers} from 'redux';
import userReducers from './reducer-user';
import activeUserReducer from './reducer-active-user';
import auth from './auth';

const allReducers = combineReducers({
    users: userReducers,
    activeUser: activeUserReducer,
    authUser: auth.login,
})

export default allReducers;