import axios from 'axios';

const handleLogin = (userData) => {
  axios.defaults.withCredentials = true;
  return axios.post('http://localhost:3030/authentication/login', userData);
};

const handleSignUp = (userData) => {
  return axios.post('http://localhost:3030/authentication/sign-up', userData);
};

const getUser = () => {
  return axios.get('http://localhost:3030/user', { withCredentials: true });
};

export {
  handleLogin,
  handleSignUp,
  getUser
}