import { combineReducers, configureStore } from '@reduxjs/toolkit'
import steveList from '../reducers/steveList';
import { steve } from '../reducers/steve';

const reducers = combineReducers({
  steveList: steveList,
  steve: steve
});

const store = configureStore({
  reducer: reducers, 
})

export default store