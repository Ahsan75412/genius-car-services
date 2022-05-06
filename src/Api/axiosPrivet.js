import axios from "axios";


const axiosPrivet = axios.create({});



// from interceptor : https://axios-http.com/docs/interceptors (Copy and paste and change the name module: 68 video: 08)

// Add a request interceptor
axiosPrivet.interceptors.request.use(function (config) {
    // Do something before request is sent
    if(config.headers.authorization){
        config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosPrivet.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if(error.response.status === 403){
        //refresh token
        //send to the server to refresh the token
    }
    return Promise.reject(error);
  });


  export default axiosPrivet;