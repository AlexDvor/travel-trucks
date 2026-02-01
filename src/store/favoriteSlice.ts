import { createSlice } from '@reduxjs/toolkit';
import type { FavoriteState } from '../interfaces/favorite';
import type { RootState } from './store';

const initialState: FavoriteState = {
	campers: [],
};

export const favoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavoriteItem: (state, { payload }) => {
			state.campers.push(payload);
		},
		deleteFavoriteItem: (state, { payload }) => {
			state.campers = state.campers.filter(car => car.id !== payload);
		},
	},
});

export const { addFavoriteItem, deleteFavoriteItem } = favoriteSlice.actions;

export const selectFavoriteCampers = (state: RootState) => state.favorite.campers;

export default favoriteSlice.reducer;
