import axios from 'axios';

export default axios.create({
   baseURL: process.env.REACT_APP_API_URL,
   headers: { 'Authorization': `OU-AUTH ${process.env.REACT_APP_API_KEY}` }
});