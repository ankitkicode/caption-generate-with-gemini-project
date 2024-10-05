import { useState,useContext } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Caption from "./pages/Caption";
import NotFound from "./pages/NotFound";
import  AuthContext  from "./context/AuthContext";
import Authenticated from "./protectedRoute/Authenticated";


const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const {GoogleLogin} = useContext(AuthContext);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-black text-white w-full h-screen ">
      <Navbar togglePopup={togglePopup} />
      <Routes>
        <Route path="/" element={<Home togglePopup={togglePopup} />} />

        <Route path="/captions" element={
        
        <Authenticated>

          <Caption />
        </Authenticated>
    
        
        
        } />

        <Route path="*" element={<NotFound />} />
      </Routes>
       
       
       {/* Copyright section always at the bottom */}
       <p className="absolute bottom-[4%] left-[17%] md:left-[38%] md:text-xl text-sm right-0  text-[#ffff] ">
                © 2024 CaptionCzar. All rights reserved.
            </p>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-lg text-center w-[90%] max-w-md">
            <h2 className="text-2xl font-bold text-white mb-6">
              Login to Caption<span className="text-[rgb(76,142,249)]">Czar</span>
            </h2>
            <button onClick={GoogleLogin} className="py-3 text-zinc-900 bg-[#0a62f0] font-bold rounded-md w-[80%] mb-4 hover:bg-gray-400 transition-all">
              Login with Google
            </button>
            <br />
            <button
              className="text-white font-semibold tracking-normal underline mt-2"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default App;
