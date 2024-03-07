// Import necessary dependencies
import React from 'react';
import classes from "./footer.module.css";

// Define the 'Footer' component as a functional component
function Footer(props) {
    return (
        <footer className={classes.footerContainer}>
            <p>&#169; Designed by Amarnadh&#174;</p>
        </footer>
    );
}

export default Footer;