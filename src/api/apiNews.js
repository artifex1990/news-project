import axios from "axios";
import { data } from "./data";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: { apiKey: API_KEY },
    });

    return response.data;
  } catch (error) {
    return data;
  }
};
