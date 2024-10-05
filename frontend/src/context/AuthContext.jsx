import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state

  // Function to handle Google login redirection
  const GoogleLogin = () => {
    window.open("https://caption-generate-with-gemini-project.onrender.com/auth/google", "_self"); // Redirect to your Passport.js Google auth route
  };

  // Function to log out the user
  const logout = async () => {
    try {
      await axios.get("https://caption-generate-with-gemini-project.onrender.com/auth/logout", { withCredentials: true }); 
      setUser(null);
      window.location.href = "/";
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Fetch the currently authenticated user (if any) from the backend
  const fetchUser = async () => {
    try {
      const response = await axios.get("https://caption-generate-with-gemini-project.onrender.com/auth/current_user", { withCredentials: true });
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false); // Set loading to false once the user is fetched
    }
  };

  // Fetch the user when the component mounts
  useEffect(() => {
    fetchUser(); // Check if a user is already logged in when the app loads
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, GoogleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
