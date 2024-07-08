import axios from "axios";

const api = axios.create({
  baseURL: "http://172.16.99.112:8080",
});

export default api;
// xios instance -> set base URL - all HTTP requests made will be prefixed with this URL
