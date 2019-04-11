import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://hrk-omnistack-backend.herokuapp.com', // localhost:3232'
    baseURL: 'http://localhost:3232',
});

export default api;