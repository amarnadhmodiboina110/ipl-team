// Import necessary dependencies
import React from 'react'
import classes from './PlayerCard.module.css';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player, id }) => {
    return (
        <>
            <Link to={`/player/${id}`}>
                {/* Container for player image */}
                <div className={classes.ImageContainer}>
                    <img src={player.img} alt={player.name}/>
                </div>
                {/* Container for player information */}
                <div className={classes.InfoContainer}>
                </div>
            </Link>
        </>
    )
}

export default PlayerCard;