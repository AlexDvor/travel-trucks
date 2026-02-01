import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FiltersState } from '../interfaces/filter';
import type { RootState } from './store';

const initialState: FiltersState = {
	location: '',
	equipment: [],
	type: '',
};

export const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilters: (_, action: PayloadAction<FiltersState>) => action.payload,
		updateFilters: (state, action: PayloadAction<Partial<FiltersState>>) => {
			Object.assign(state, action.payload);
		},
		resetFilters: () => initialState,
	},
});

export const { setFilters, updateFilters, resetFilters } = filterSlice.actions;
export const selectStateFilter = (state: RootState) => state.filters;
export default filterSlice.reducer;
