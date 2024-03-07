// Import necessary dependencies
import React, { useState } from "react";
import { addTeams } from "../../Store/Slices/teamSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from './FormStyle.module.css';

// Define the 'CreateTeamForm' functional component
function CreateTeamForm() {
    // Initialize Redux dispatch and navigation hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Initialize state variables for form inputs
    const [teamName, setTeamName] = useState("");
    const [fullTeam, setFullTeam] = useState("");
    const [playersCount, setPlayersCount] = useState(0);
    const [captain, setCaptain] = useState("");
    const [bestBatsman, setbestBatsman] = useState("");
    const [bestBowler, setbestBowler] = useState("");
    const [timesWon, settimesWon] = useState(0);
    const [city, setCity] = useState("");

    // Handle form submission
    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        // Dispatch the 'addTeams' action with team data
        dispatch(addTeams({
            "teamName": teamName,
            "bestBatsman": bestBatsman,
            "bestBowler": bestBowler,
            "timesWon": timesWon,
            "captain": captain,
            "city": city
        }))
        // Navigate to the '/teams' route after successful form submission
        navigate("/teams")
    };

    // Return JSX for the 'CreateTeamForm' component
    return (
        <div className={classes.FormContainer}>
                {/* Form element with a input fields */}
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="teamName">Enter New Team:</label>
                    <input type="text" id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="fullTeam">Enter Full Team:</label>
                    <input type="text" id="fullTeam" value={fullTeam} onChange={(e) => setFullTeam(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="playersCount">Players Count:</label>
                    <input type="number" id="playersCount" value={playersCount} onChange={(e) => setPlayersCount(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="captain">Enter Captain:</label>
                    <input type="text" id="captain" value={captain} onChange={(e) => setCaptain(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="bestBatsman">Top Batsman:</label>
                    <input type="text" id="bestBatsman" value={bestBatsman} onChange={(e) => setbestBatsman(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="bestBowler">Top Bowler:</label>
                    <input type="text" id="bestBowler" value={bestBowler} onChange={(e) => setbestBowler(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="timesWon">Champ Counts:</label>
                    <input type="number" id="timesWon" value={timesWon} onChange={(e) => settimesWon(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor="represntCity">Represnt City:</label>
                    <input type="text" id="represntCity" value={city} onChange={(e) => setCity(e.target.value)} required/>
                </div>
                {/* Submit button */}
                <button type="submit"><span>Submit</span></button>
            </form>
        </div>
    );
}

export default CreateTeamForm;