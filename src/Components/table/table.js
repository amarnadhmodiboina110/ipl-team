// Import necessary dependencies
import React from 'react';
import classes from './table.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const TeamTable = () => {
    // Retrieve teams data from Redux store, and inititalize navigation function
    const teams = useSelector(state => state.teams.teams)
    const navigate = useNavigate();

    // Handle clicking on a team row and navigate to its details page
    const handleClick = (index) => {
        navigate(`/teampage/${index}`);
    }

    return (
        <table className={classes.teamTable}>
            {/* Define a table with a specific CSS class */}
            <thead>
                <tr>
                    <th>Team</th>
                    <th>Team Full Name</th>
                    <th>Players Count</th>
                    <th>Captain</th>
                    <th>Top Batsman</th>
                    <th>Top Bowler</th>
                    <th>Champ Count</th>
                    <th>Represent City</th>
                </tr>
            </thead>
            <tbody>
                {/* Map through teams and create table rows */}
                {teams.map((team, index) => (
                    <tr key={ index} onClick={()=> { {}
                        (handleClick(index))}
                    }>
                        <td>{team.abbreviation}</td>
                        <td>{team.teamName}</td>
                        <td>{(team.playing11).length}</td>
                        <td>{team.captain}</td>
                        <td>{team.bestBatsman}</td>
                        <td>{team.bestBowler}</td>
                        <td>{team.timesWon}</td>
                        <td>{team.city}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TeamTable;