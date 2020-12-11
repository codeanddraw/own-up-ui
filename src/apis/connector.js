import axios from 'axios';

export default axios.create({
   baseURL: 'process.env.API_URL',
   headers: {'Authorization': 'OU-AUTH process.env.API_KEY'}
});