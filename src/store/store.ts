import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from './filterSlice';
import camperSliceReducer from './campersSlice';
import favoriteSliceReducer from './favoriteSlice';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritePersistConfig = {
	key: 'favorite',
	storage,
	whitelist: ['campers'],
};

const persistedFavoriteReducer = persistReducer(
	favoritePersistConfig,
	favoriteSliceReducer,
);
export const store = configureStore({
	reducer: {
		campers: camperSliceReducer,
		filters: filterSliceReducer,
		favorite: persistedFavoriteReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
