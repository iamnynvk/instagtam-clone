import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserSlice from '../Slices/UserSlice';

interface IPersistConfig {
  key: string;
  whitelist: Array<string>;
  storage: any;
}

const persistConfig: IPersistConfig = {
  key: 'root',
  whitelist: ['users'],
  storage: AsyncStorage,
};

const reducer = combineReducers({
  users: UserSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export {store, persistor};
