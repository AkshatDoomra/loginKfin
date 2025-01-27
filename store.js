import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../rSlice/rslice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, userReducer)

export const store =  configureStore({
    
    reducer:persistedReducer

});

export const persistor = persistStore(store)