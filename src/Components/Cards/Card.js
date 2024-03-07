// Import necessary dependencies
import React from 'react';
import classes from "./Card.module.css";
import { Link } from 'react-router-dom';

function Card({ team, id }) {
    return (
            <>
            {/* Create a 'Link' component that navigates to '/teampage/{id}' when clicked */}
            <Link to={`/teampage/${id}`} id={id}>
                    <div className={classes.CardBody} id={team.teamName}>
                        <img src={team.teamLogo} alt={team.teamName + " logo"} />
                    </div>
                </Link>
            </>
            );
}

export default Card;