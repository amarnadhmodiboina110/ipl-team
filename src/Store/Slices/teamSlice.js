// Import necessary modules from React and React Redux.
import { createSlice } from "@reduxjs/toolkit";
// Import team data
import teams from "../../Utils/TeamData";

// Define the initial state for the Redux slice
const initialState = {
    // Initialize 'teams' with the imported team data
    teams: teams,
    //Initialize 'players' by flattening the 'playing11' arrays of all teams
    players: teams
        .map((team) => team.playing11)
        .flat(1)
};

// Create a Redux slice using createSlice
export const teamSlice = createSlice({
    name: "teams",
    initialState,
    reducers: {
        // Reducer to add a new team to the 'teams' state
        addTeams(state, action) {
            state.teams.push(action.payload);
        },
        // Reducer to add a new player to the 'players' state
        addPlayer(state, action) {
            state.players.push(action.payload);
        },
        // Reducer to set the active team
        setActiveTeam(state, action) {
            state.activeTeam = action.payload;
        }
    }
});

// Export action creators
export const { addTeams, addPlayer, setActiveTeam } = teamSlice.actions;

export default teamSlice.reducer;