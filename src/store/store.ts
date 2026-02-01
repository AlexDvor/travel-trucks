import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from './filterSlice';
import camperSliceReducer from './campersSlice';

export const store = configureStore({
	reducer: {
		campers: camperSliceReducer,
		filters: filterSliceReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
