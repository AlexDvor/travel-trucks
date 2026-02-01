import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiCamper, { type ICamperResponse } from '../api/apiCamper';

export const fetchCampers = createAsyncThunk<
	ICamperResponse,
	void,
	{ rejectValue: string }
>('campers/fetchCampers', async (_, { rejectWithValue }) => {
	try {
		const response = await ApiCamper.getData();
		return response;
	} catch (error) {
		console.log(error);
		return rejectWithValue(error.response?.data || 'Error fetching campers');
	}
});
