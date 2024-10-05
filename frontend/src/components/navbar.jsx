import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext"; 

const Navbar = ({ togglePopup }) => {
    const { user, logout } = useContext(AuthContext); 
    const [showLogout, setShowLogout] = useState(false); 

    // Function to handle profile picture click
    const handleProfileClick = () => {
        setShowLogout(!showLogout);
    };

    return (
        <div className="px-6 md:px-16 md:py-6 py-8 flex items-center justify-between">
            <div className="font-bold text-2xl text-[#486aff]">
                <h1>Caption<span className="text-[#ffffff]">Czar</span></h1>
            </div>
            <div className="flex items-center">
                {/* Check if user is logged in */}
                {user ? (
                    <>
                        {/* User profile picture */}
                        <div className="ml-4 relative">
                            <img
                                src={user.thumbnail}
                                alt="User profile"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                onClick={handleProfileClick} // Toggle logout button visibility
                            />
                            {/* Show Logout button if profile picture is clicked */}
                            {showLogout && (
                                <button
                                    className="absolute top-full right-0 mt-2 px-10 py-2 text-[15px] font-bold text-zinc-100 bg-[#f65929] rounded-md"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    // Login button to open the popup
                    <button
                        className="px-10 py-2 text-[15px] font-bold text-zinc-900 bg-[#0a62f0] rounded-md"
                        onClick={togglePopup}
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
