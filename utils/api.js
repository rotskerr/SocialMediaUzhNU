// api.js
import axios from 'axios';

const API_URL = 'https://api.unsplash.com/';
const API_KEY = 'R8KbuV2CBPwRoF9oWXBHaXuTX8E0VMT7L2wn3CqVpbw'; // Замініть на ваш ключ API Unsplash

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(`${API_URL}search/photos`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        query,
        per_page: 50,
      }
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async (username) => {
  try {
    const response = await axios.get(`${API_URL}users/${username}`, {
      headers: {
        Authorization: ` ${API_KEY}`,
      },
    });
    return response.data;

  } catch (error) {
    console.error(error);
  }
};