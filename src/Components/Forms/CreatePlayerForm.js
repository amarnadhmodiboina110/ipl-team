// Import necessary dependencies
import React, { useState } from "react";
import { addPlayer } from "../../Store/Slices/teamSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from "./FormStyle.module.css";

// Define the 'CreatePlayerForm' functional component
const CreatePlayerForm = () => {
    // Initialize Redux dispatch and navigation hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Initialize state variables for form inputs
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [img, setImg] = useState("")

    // Handle form submission
    const handleSubmit = (e) => {
        // Prevent the default form submission behavior
        e.preventDefault();
        // Dispatch the 'addPlayer' action with player data
        dispatch(addPlayer({
            "name": name,
            "role": role,
            "img": img
        }))
        // Navigate to the '/players' route after successful form submission
        navigate("/players")
    };

    // Return JSX for the 'CreatePlayerForm' component
    return (
        <>
            {/* Container for the form */}
            <div className={classes.FormContainer}>
                {/* Form element with a input fields */}
                <form onSubmit={handleSubmit}>
                    <h2>Create A Player Details</h2>
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="teamName">Team Name:</label>
                        <input type="text" id="teamName" required />
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="text" id="price" required />
                    </div>
                    <div>
                        <label htmlFor="role">Role:</label>
                        <input type="text" id="role" required value={role} onChange={(e) => setRole(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="status">Status:</label>
                        <input type="text" id="status" required/>
                    </div>
                    <div>
                        <label htmlFor="image">Photo:</label>
                        <input type="url" id="status" required value={img} onChange={(e) => setImg(e.target.value)} />
                    </div>
                    {/* Submit button */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default CreatePlayerForm;