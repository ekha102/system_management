import axios from "axios";

const api = axios.create({
baseURL: "/api",
withCredentials: true, // send cookies
});

let isRefreshing = false;
let refreshSubscribers: any[] = [];

function onRefreshed() {
refreshSubscribers.forEach((callback) => callback());
refreshSubscribers = [];
}

api.interceptors.response.use(
(response) => response,
async (error) => {
const originalRequest = error.config;

// If access token expired
if (error.response?.status === 401 && !originalRequest._retry) {

  if (isRefreshing) {
    return new Promise((resolve) => {
      refreshSubscribers.push(() => resolve(api(originalRequest)));
    });
  }

  originalRequest._retry = true;
  isRefreshing = true;

  try {
    await axios.post("/api/auth/refresh", {}, { withCredentials: true });

    isRefreshing = false;
    onRefreshed();

    return api(originalRequest);
  } catch (err) {
    window.location.href = "/login";
    return Promise.reject(err);
  }
}

return Promise.reject(error);

}
);

export default api;