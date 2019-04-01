import { createStore, combineReducers } from "redux";

// Reducers
import albums from './reducers/albums';
import user from './reducers/user';
import songs from './reducers/songs';

export default createStore(combineReducers({ albums, user, songs }));