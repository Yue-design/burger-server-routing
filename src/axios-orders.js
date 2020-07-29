import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burguer-bea61.firebaseio.com/'
});

export default instance;