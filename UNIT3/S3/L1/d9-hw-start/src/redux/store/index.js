import { combineReducers, configureStore } from '@reduxjs/toolkit'
import steveList from '../reducers/steveList';

const reducers = combineReducers({
  steveList: steveList,
  steve: 
});

const store = configureStore({
  reducer: reducers, 
})

export default store