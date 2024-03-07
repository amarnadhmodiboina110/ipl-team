// Import necessary dependencies
import React from 'react';
import classes from './header.module.css';

// Define the 'Header' component as a functional component
function Header(props) {
    return (
        <>
        <header className={classes.headerContainer}>
            {/* Image element for the header */}
            <img className={classes.headerImage} src="https://th.bing.com/th/id/OIP.6X84iqLESOqLzxUIpPwPsAHaEo?rs=1&pid=ImgDetMain" alt="Tata IPL 2023"/>            
            {/* Header title */}
            <h1 className={classes.headerTitle}>Indian Premier League 2024</h1>
        </header>
        </>
    );
}

export default Header;