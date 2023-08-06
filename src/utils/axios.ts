import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://swapi.dev/api/",
});

export default axiosInstance;
