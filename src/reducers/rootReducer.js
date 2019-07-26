import { combineReducers } from 'redux';
import { default as UserStore } from './userReducer';
import {reducer} from "redux-form";

const appReducer = combineReducers({
  UserStore:UserStore,
  form:reducer
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
