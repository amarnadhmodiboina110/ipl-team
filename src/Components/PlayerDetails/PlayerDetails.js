// Import necessary dependencies
import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import classes from "./PlayerDetails.module.css";

const PlayerDetails = () => {
    // Get route parameters from the URL
    const routeParams = useParams();

    // Select the active team and player using Redux
    const activeTeam = useSelector((state) => state.teams.teams[state.teams.activeTeam] ? state.teams.teams[state.teams.activeTeam] : (Math.random()*(7-0)+0) );

    // Get the active player based on the route parameter (id)
    const activePlayer = activeTeam.playing11[routeParams.id]

    return (
        <>
            {/* Container for player details */}
            <div className={classes.PlayerDetailsContainer}>

                {/* Container for player image */}
                <div className={classes.ImageContainer}>
                    <img src={activePlayer.img} alt={activePlayer.name + "image"}/>
                </div>
                
                {/* Container for player information */}
                <div className={classes.InfoContainer}>
                    <p>Name:  {activePlayer.name}</p>
                    <p>Team Name:  {activeTeam.teamName}</p>
                    <p>Price:  ₹{Math.floor(Math.random()*(18-5)+5)} Cr</p>
                    <p>Status:  Playing</p>
                    <p>Role:  {activePlayer.role}</p>
                </div>
            </div>
        </>
    )
}

export default PlayerDetails