import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { ICamper } from '../interfaces/camper';
import type { RootState } from './store';
import { selectStateFilter } from './filterSlice';
import { fetchCampers } from './campersOps';

interface CampersState {
	items: ICamper[];
	loading: boolean;
	error: string | null;
}

const initialState: CampersState = {
	items: [],
	loading: false,
	error: null,
};

export const campersSlice = createSlice({
	name: 'campers',
	initialState,
	reducers: {},

	extraReducers: builder => {
		builder
			.addCase(fetchCampers.pending, state => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchCampers.fulfilled, (state, { payload }) => {
				state.loading = false;
				state.items = payload;
			})
			.addCase(fetchCampers.rejected, (state, action) => {
				state.loading = false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.error = 'Unknown error';
				}
			});
	},
});

export const selectCampers = (state: RootState) => state.campers.items;
export const selectLoading = (state: RootState) => state.campers.loading;
export const selectError = (state: RootState) => state.campers.error;

export const selectFilteredCampers = createSelector(
	[selectCampers, selectStateFilter],
	(campers, search) => {
		return campers.filter(camper =>
			camper.name.toLowerCase().includes(search.location.toLowerCase()),
		);
	},
);

export default campersSlice.reducer;
