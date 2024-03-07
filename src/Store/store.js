// Import necessary modules from React and React Redux.
import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from '../Store/Slices/teamSlice';

// Configure the Redux store
const store = configureStore({
    // Define the 'teams' slice reducer for the store
    reducer: {
        teams: teamsReducer
    }
});

export default store;