import { combineReducers } from 'redux'

const initialState = {};

const rootReducer = combineReducers({
  campuses: require('./CampusReducer').default,
  students: require('./StudentReducer').default
});

export default rootReducer;