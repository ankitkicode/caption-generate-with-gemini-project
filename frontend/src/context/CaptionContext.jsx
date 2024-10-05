import { createContext, useState } from "react";
import axios from "axios";

const CaptionContext = createContext();

export const CaptionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false); // Loading state
  const [caption, setCaption] = useState(""); // Holds the generated caption

  // Function to handle caption generation
  const generateCaption = async (formData) => {
    console.log({formData})
    setLoading(true); 
    try {
      const response = await axios.post("https://caption-generate-with-gemini-project.onrender.com/api/generateCaption", formData, {withCredentials: true });
     console.log(response.data)
      setCaption(response.data.caption);
    } catch (error) {
      console.error("Error generating caption:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <CaptionContext.Provider value={{ loading, caption, generateCaption,setCaption }}>
      {children}
    </CaptionContext.Provider>
  );
};

export default CaptionContext;
