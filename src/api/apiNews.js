import { getContent } from "./getContent";
import { getLocalCategories, getLocalNews } from './local/apiLocalNews';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    return await getContent(`${BASE_URL}search`, {
      apiKey: API_KEY,
      page_number,
      page_size,
      category,
      keywords,
    });
  } catch (error) {
    console.log(error);
    return await getLocalNews({ page_number, page_size, category, keywords });
  }
};

export const getCategories = async () => {
  try {
    return await getContent(`${BASE_URL}available/categories`, {
      apiKey: API_KEY,
    });
  } catch (error) {
    console.log(error);
    return await getLocalCategories();
  }
};
