import  {configureStore}  from "@reduxjs/toolkit"
import  contactsSlice  from "./contactsSlice"
import filtersSlice from "./filtersSlice"
import { persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key: 'contacts',
    storage,
  }

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsSlice)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filters: filtersSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
