import axios from 'axios';

const _axios = axios.create({
    baseURL: process.env.REACT_APP_DEV_API_URL
});

export default _axios;