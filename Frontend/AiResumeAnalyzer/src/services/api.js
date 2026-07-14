import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api/resume",
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

export default api;