import axios from "axios";

const instance = axios.create({
    baseURL: "https://caption-generate-with-gemini-project.onrender.com",
    withCredentials:true,
});

export default instance;