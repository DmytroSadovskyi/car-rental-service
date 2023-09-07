import axios from 'axios';
axios.defaults.baseURL = 'https://645a8c7c65bd868e931e4c89.mockapi.io';

const fetchCars = async abortController => {
  const response = await axios.get('/cars', {
    signal: abortController.signal, // Вказуємо сигнал для скасування
  });
  return response.data;
};

export default fetchCars;
