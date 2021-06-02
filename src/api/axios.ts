import axios from 'axios';
import { API_URL } from 'react-native-dotenv';
// process.env.API_HOST

export default axios.create({
  baseURL: API_URL + '/api/',
  timeout: 8000,
  headers: {
    'Content-Type': 'application/json',
  },
});
