// Import necessary dependencies
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PlayerCard from "../PlayerCard/PlayerCard";
import classes from "./TeamDetails.module.css";
import { setActiveTeam } from "../../Store/Slices/teamSlice";

const TeamDetails = () => {
    // Retrieve route parameters from the URL
    const routeParams = useParams();

    // Access the active team's data from the Redux store using the route parameter
    const activeTeam = useSelector((state) => state.teams.teams[routeParams.id]);

    // Access the Redux dispatch function. and dispatch an action to set the active team in the Redux store
    const dispatch = useDispatch();
    dispatch(setActiveTeam(routeParams.id))

    return (
        <>
            <div className={classes.WrapperContainer}>{/* Main container for team details */}
                {/* <aside className={classes.AsideContainer}>   */}
                    {/* Team logo */}
                    {/* <img src={activeTeam.teamLogo} alt={activeTeam.teamName + "Logo"}></img> */}

                    {/* Container for displaying team information */}
                    {/* <div className={classes.TeamInfoContainer}>
                        <p><span>Captain</span><hr></hr> {activeTeam.captain}</p>
                        <p><span>Top Batsman</span><hr></hr> {activeTeam.bestBatsman} </p>
                        <p><span>Top Bowler</span><hr></hr> {activeTeam.bestBowler} </p>
                        <p><span>Championship Count</span><hr></hr> {activeTeam.timesWon} </p>
                    </div>
                </aside> */}

                {/* Section for displaying the list of playing 11 players */}
                <section>
                    {/* Map through the playing 11 players and render a PlayerCard component for each */}
                    {activeTeam.playing11.map((player, index) => {
                        return <PlayerCard player={player} key={index} id={index}/>
                    })}
                </section>
            </div>
        </>
    );
};

export default TeamDetails;