import axios from "axios";
import { store } from "../redux/configureStore";
import { setUser } from "../redux/slices/user.slice";

let url;
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test") {
  url = "http://localhost:5000/";
}

if (process.env.NODE_ENV === "production") {
  url = "https://api.pinimovies.com/";
}

const api = axios.create({
  baseURL: url,
});
//create an interceptor that will send the token to the server
api.interceptors.request.use(
  async (config) => {
    // const { origin } = new URL(config.url);
    //
    // const allowedOrigins = [url];
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (
      error.response.status === 401 &&
      error.response.data.message === "tokenExpired"
    ) {
      localStorage.removeItem("token");
      store.dispatch(setUser(null));
    }

    // if the error is due to other reasons, we just throw it back to axios
    return Promise.reject(error);
  }
);
export default api;
