import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    rockets: [],
    isLoading: false,
    error: null,
};

// Async thunk to fetch rockets from SpaceX API
export const fetchRockets = createAsyncThunk(
    'rockets/fetchRockets',
    async () => {
        const response = await axios.get('https://api.spacexdata.com/v4/rockets');
        return response.data;
    }
);

const rocketsSlice = createSlice({
    name: 'rockets',
    initialState,
    reducers: {
        toggleReservation: (state, action) => {
            const rocketId = action.payload;
            const rocket = state.rockets.find((rocket) => rocket.id === rocketId);
            if (rocket) {
                rocket.reserved = !rocket.reserved;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRockets.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRockets.fulfilled, (state, action) => {
                state.isLoading = false;
                state.rockets = action.payload.map((rocket) => ({
                    ...rocket,
                    reserved: false, // Add this line to initialize reservation state
                }));
            })
            .addCase(fetchRockets.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

// Export actions and reducer
export const { toggleReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
