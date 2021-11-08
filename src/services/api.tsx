import axios from "axios";

const api = axios.create({
  baseURL: "https://kenzie-burguer.herokuapp.com/",
});

export default api;
