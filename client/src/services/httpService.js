import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../requestMethods";

axios.defaults.baseURL = BASE_URL
axios.interceptors.response.use(null, (err) => {
  if (err.code === "ERR_NETWORK") {
    toast.error("Network error");
  } else if (err.response?.status > 403) {
    toast.error("An unexpected error occurred");
  }
  return Promise.reject(err);
});

const httpService = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
