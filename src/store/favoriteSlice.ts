import { createSelector, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FavoriteState } from '../interfaces/favorite';
import type { RootState } from './store';
import type { ICamper } from '../interfaces/camper';

const initialState: FavoriteState = {
	campers: [],
};

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		toggleFavorite: (state, { payload }: PayloadAction<ICamper>) => {
			const hasSomeId = state.campers.some(car => car.id === payload.id);
			if (hasSomeId) {
				state.campers = state.campers.filter(car => car.id !== payload.id);
			} else {
				state.campers.push(payload);
			}
		},
	},
});

export const { toggleFavorite } = favoriteSlice.actions;

export const selectFavoriteCampers = (state: RootState) => state.favorite.campers;

export const selectFavoriteIds = createSelector([selectFavoriteCampers], campers =>
	campers.map(item => item.id),
);
export default favoriteSlice.reducer;
