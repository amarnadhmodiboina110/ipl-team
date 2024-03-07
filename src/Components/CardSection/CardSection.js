// Import necessary dependencies
import React, { useState} from 'react';
import Card from '../Cards/Card';
import { useSelector } from "react-redux";
import classes from "./CardSection.module.css";

// Define the 'CardSection' component as a functional component
function CardSection() {
    // Use 'useSelector' to get the 'teams' state from Redux
    const teams = useSelector((state) => {
        return state.teams.teams;
    });

    // Initialize 'filteredResults' state with 'teams' as the initial value
    let [filteredResults, setFilteredResults] = useState(teams);

    // Event handler for team search input
    const handleTeamSearch = (e) => {
        // Filter 'teams' based on the search input value (case-insensitive)
        filteredResults = teams.filter((team) =>
            team.teamName.toLowerCase().includes(e.target.value.toLowerCase())
        );
        // Update the 'filteredResults' state with the filtered teams
        setFilteredResults(filteredResults);
    };

    return (
        <>
            {/* Input element for team search with styling from CSS module */}
            {/* <input className={classes.SearchContainer} placeholder='Search Teams' onChange={handleTeamSearch} /> */}
            {/* Container for displaying team cards with styling from CSS module */}
            <div className={classes.CardContainer}>
                {/* Map through 'filteredResults' and render 'Card' components */}
                {filteredResults.map((team, index) => {
                    return <Card key={index} id={index} team={team} />;
                })}
            </div></>
    )
}

export default CardSection;