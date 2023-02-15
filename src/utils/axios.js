import axios from "axios";

const axiosApiIntances = axios.create({
  baseURL: "https://gorest.co.in/public/v2/",
});

axiosApiIntances.interceptors.request.use(
  function (config) {
    config.headers = {
      // Bearer Token
      Authorization: `Bearer 024259cbda85d4589f951306d86b92a437d57b78bd3d272f4b9f543d7b11c204`,
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
