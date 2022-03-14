import { configureStore, combineReducers } from '@reduxjs/toolkit';
import surveyDataSlice from './surveyDataSlice';
import makeFormSlice from './makeFormSlice';

const reducers = combineReducers({
  surveyData: surveyDataSlice,
  makeForm: makeFormSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
