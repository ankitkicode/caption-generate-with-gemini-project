import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Navigate } from "react-router-dom";

const Authenticated = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

//   console.log("User from Authenticated Routes:", user);

  
  if (loading) {
    return <div>Loading...</div>;
  }


  if (!user) {
    return <Navigate to="/" />;
  }

 
  return children;
};

export default Authenticated;
