import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.6.37.16:8000",
});

export default instance;
