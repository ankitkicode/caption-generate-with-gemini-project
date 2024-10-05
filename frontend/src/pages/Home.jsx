import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Home = ({ togglePopup }) => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate(); // Initialize navigate function

    // Show loading screen while fetching user info
    if (loading) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                <h1>Loading...</h1>
            </div>
        );
    }

    // Handle "Get Started" button click
    const handleGetStarted = () => {
        if (user) {
            // If the user is logged in, navigate to /captions
            navigate('/captions');
        } else {
            // If not logged in, show the login popup
            togglePopup();
        }
    };

    return (
        <div className="h-auto w-full text-center px-4 font-gilroy relative overflow-hidden ">
            <h1 className="
            mt-8 md:mt-20
            md:text-[3.5rem] text-4xl
            tracking-tight
            text-center
            md:leading-[4rem]  leading-[3.1rem]
            font-semibold w-[90%] sm:w-[100%] md:w-[75%]  m-auto">
                Supercharge Your Social Media with <span className="text-[#486aff]">Caption<span className="text-white">Czar</span></span>
            </h1>
            <p className="text-center w-[100%]  md:w-[70%] lg:w-[60%] m-auto md:mt-3 mt-7 leading-8 text-xl md:text-xl">
                Effortlessly <span className="text-[#5776ff]">generate engaging captions</span> and trending hashtags for Instagram, Facebook, Twitter, and LinkedIn. Let AI take your posts to the next level with personalized, <span className="text-[#486aff]">platform-specific</span> content.
            </p>
            <div className="mt-10">
                <button
                    className="px-20 md:px-18 py-2 text-[1.2rem]  font-bold text-zinc-900 bg-[#0a62f0] rounded-md"
                    onClick={handleGetStarted} // Call the new handler function
                >
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;
