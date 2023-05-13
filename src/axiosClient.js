import axios from "axios";
//creating an instance
const axiosClient = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  });

export default axiosClient;