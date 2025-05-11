import axios from "axios";
import { data } from "./data";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page_number = 1, page_size = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}search.json`, {
      params: {
        apiKey: API_KEY,
        page_number: page_number,
        page_size: page_size,
      },
    });

    const pageNavigation = page_number * page_size - 10;
    response.data.news = response.data.news.slice(
      pageNavigation,
      pageNavigation + page_size
    );
    response.data.page = page_number;

    return response.data;
  } catch (error) {
    return data;
  }
};
