import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRockets } from './rocketsApi';

export const getRockets = createAsyncThunk('rockets/fetchRockets', fetchRockets);

const rocketsSlice = createSlice({
    name: 'rockets',
    initialState: {
        rockets: [],
        loading: false,
        error: null,
    },
    reducers: {
        toggleReservation: (state, action) => {
            const rocket = state.rockets.find((r) => r.id === action.payload);
            if (rocket) {
                rocket.reserved = !rocket.reserved;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRockets.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRockets.fulfilled, (state, action) => {
                state.loading = false;
                state.rockets = action.payload;
            })
            .addCase(getRockets.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { toggleReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
