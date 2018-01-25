import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-demo-255ee.firebaseio.com/'
});

export default instance;
