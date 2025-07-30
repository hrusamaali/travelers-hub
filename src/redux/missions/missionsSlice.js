// src/redux/missions/missionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    missions: [],
    isLoading: false,
    error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
    const res = await axios.get('https://api.spacexdata.com/v3/missions');
    return res.data;
});

const missionsSlice = createSlice({
    name: 'missions',
    initialState,
    reducers: {
        toggleMission: (state, action) => {
            const missionId = action.payload;
            const mission = state.missions.find((m) => m.mission_id === missionId);
            if (mission) {
                mission.reserved = !mission.reserved;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMissions.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMissions.fulfilled, (state, action) => {
                state.isLoading = false;
                // Initialize reserved to false
                state.missions = action.payload.map((mission) => ({
                    ...mission,
                    reserved: false,
                }));
            })
            .addCase(fetchMissions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { toggleMission } = missionsSlice.actions;
export default missionsSlice.reducer;
