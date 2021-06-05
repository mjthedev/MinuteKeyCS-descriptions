import { configureStore } from '@reduxjs/toolkit';
import yearReducer from './features/year/year';
import makeReducer from './features/make/make';
import modelReducer from './features/model/model';



export default configureStore({
  reducer: {
    year: yearReducer,
    make: makeReducer,
    model: modelReducer
    
  }
})