import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';


const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });

    if (response.data.token) {
      localStorage.setItem('jwt', response.data.token);
    }

    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw new Error('Credenciales inválidas');
  }
};

const isAuthenticated = () => {
  const token = localStorage.getItem('jwt');
  return token ? true : false;
};

const logout = () => {
  localStorage.removeItem('jwt');
};

export default {
  login,
  isAuthenticated,
  logout
};
