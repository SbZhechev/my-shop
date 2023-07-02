import Axios from 'axios';

const handleLogin = (userData) => {
  return Axios.post('http://localhost:3030/authentication/login', userData);
};

const handleSignUp = (userData) => {
  return Axios.post('http://localhost:3030/authentication/sign-up', userData);
};

export {
  handleLogin,
  handleSignUp
}