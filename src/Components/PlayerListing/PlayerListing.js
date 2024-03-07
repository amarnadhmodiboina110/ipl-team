// Import necessary dependencies
import { useSelector } from "react-redux";
import { useState } from "react";
import classes from "./PlayerListing.module.css";


const PlayerListing = () => {
    // Select player data from the Redux store using useSelector
    const players = useSelector((state) => {
        console.log(state.teams.players.flat(1));
        return state.teams.players.flat(1);
    });    
    // Initialize a state variable to hold the filtered player list
    let [filteredPlayerList, setfilteredPlayerList] = useState(players);

        // Event handler for player search input
    const handlePlayerSeach = (event) => {
        // Update the filtered player list based on the search input
   setfilteredPlayerList(
            // Filter players whose names match the search input (case-insensitive)
     players.filter((player) =>
                player.name.toLowerCase().includes(event.target.value.toLowerCase())
            )
        );
    };

    return (
        <>
            <div className={classes.PlayersContainer}>
                <h2><span>Here's a list of all the players. Search your player!</span></h2>

                {/* Input field for player search */}
                {/* <input className={classes.SearchBox} type="text" name="players" placeholder="Search your favourite player!" onChange={handlePlayerSeach} />npm start
                 */}
                
                {/* Display the filtered player list */}
                {filteredPlayerList?.map((player, index) => (
                    <li className={classes.Listitems} key={index}>{player.name}</li>
                ))}
            </div>
        </>
    );
};

export default PlayerListing;