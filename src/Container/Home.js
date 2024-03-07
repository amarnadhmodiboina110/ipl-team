// Import CSS styles for the 'Home' component (assuming it's a CSS module)
import "./Home.module.css";
// Import necessary components
import CardSection from "../Components/CardSection/CardSection";
import Footer from "../Components/footer/footer";

// Define the 'Home' component as a functional component
export default function Home() {
    return (
        <>
            <div className="Home">
                {/* Render the 'CardSection' and 'Footer' component */}
                <CardSection />
                <Footer />
            </div>
        </>
    );
}