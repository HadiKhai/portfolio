import axios from 'axios';

const LOCAL_API_HOST = 'http://localhost:3000';
const baseURL = LOCAL_API_HOST;

const httpClient = axios.create({
    baseURL,
    responseType: "json"

});

export default httpClient;
