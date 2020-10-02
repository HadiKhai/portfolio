import axios from 'axios';

const LOCAL_API_HOST = 'http://localhost:3000';
const baseURL = LOCAL_API_HOST;

const httpClient = axios.create({
    baseURL,
    responseType: "json"

});


const getBlob = axios.create({
    baseURL,
    responseType: "blob",
    method: 'GET',

});
export {httpClient,getBlob};
