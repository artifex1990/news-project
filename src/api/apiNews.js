import { API_KEY, BASE_URL } from "../constants/constants";
import { getContent } from "./getContent";
import { getLocalCategories, getLocalNews } from "./local/apiLocalNews";

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
