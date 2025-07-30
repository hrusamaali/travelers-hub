import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';
// (setup later)
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        rockets: rocketsReducer,
        missions: missionsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
