import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = {
	name: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeFilter: (state, action) => {
			state.name = action.payload;
		},
	},
});

export const selectNameFilter = (state: RootState) => state.filters.name;

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;
