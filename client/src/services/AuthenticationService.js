import Axios from 'axios';

const handleLogin = (userData) => {
  return Axios.post('http://localhost:3030/authentication/login', userData);
};

export {
  handleLogin
}