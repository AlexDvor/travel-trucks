import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiCamper from '../api/apiCamper';
import type { ICamper } from '../interfaces/camper';

export const fetchCampers = createAsyncThunk<ICamper[], void, { rejectValue: string }>(
	'campers/fetchCampers',
	async (_, { rejectWithValue }) => {
		try {
			const response = await ApiCamper.getData();
			return response.items;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error.response?.data || 'Error fetching campers');
		}
	},
);
