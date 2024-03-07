import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/header/header";
import Navbar from "./Components/navbar/navbar";
import Home from "./Container/Home";
// Import necessary modules from React and React Redux.
import TeamTable from "./Components/table/table";
import CreateTeamForm from "./Components/Forms/CreateTeamForm";
import CreatePlayerForm from "./Components/Forms/CreatePlayerForm";
import TeamDetails from "./Components/TeamDetails/TeamDetails";
import PlayerDetails from "./Components/PlayerDetails/PlayerDetails";
import PlayerListing from "./Components/PlayerListing/PlayerListing";

export default function App() {
    return (
        <>
                {/* Wrap the entire application with BrowserRouter to enable routing functionality. */}
                <BrowserRouter>
                {/* Include the Header and the Navbar component at the top of the application. */}
                <Header />
                <Navbar />

                {/* Define the routes for the application within a Routes component. */}
                <Routes>
                    {/* Define a route for the home page using the Home component. */}
                    <Route path={""} exact element={<Home />}></Route>
                    {/* Nested routes for other application sections */}                    
                    <>
                    <   Route path={"/teams"} element={<TeamTable />}> </Route>
                        <Route path="/create-team" element={<CreateTeamForm />}></Route>
                        <Route path="/create-player" element={<CreatePlayerForm />}></Route>
                        <Route path={"/teampage/:id"} element={<TeamDetails />}></Route>
                        <Route path={"/player/:id"} element={<PlayerDetails />}></Route>
                        <Route path={"/players"} element={<PlayerListing />}></Route>
                    </>
                </Routes>

                {/* <Footer /> */}
            </BrowserRouter>
        </>
    );
}
