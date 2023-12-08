// api.js
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "https://api.unsplash.com/";
const API_KEY = "R8KbuV2CBPwRoF9oWXBHaXuTX8E0VMT7L2wn3CqVpbw";

export const fetchImages = async (query) => {
  try {
    const response = await axios.get(`${API_URL}search/photos`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        query,
        per_page: 200,
      },
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
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserPhotos = async (username) => {
  try {
    const response = await axios.get(`${API_URL}users/${username}/photos`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: {
        per_page: 200,
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMe = async () => {
  try {
    const response = await axios.get(`${API_URL}users/rotskerr`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    const dataString = JSON.stringify(response.data);

    await AsyncStorage.setItem('myProfileData', dataString);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};