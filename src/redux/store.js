import {  configureStore } from '@reduxjs/toolkit'
import filterSlice from './filterSlice';

import eventsSlice from './eventsSlice';
const store =  configureStore({
  reducer: {
    events: eventsSlice,
    eventFilter:filterSlice
  }
});

export default store;
