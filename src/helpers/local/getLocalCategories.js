import { getContent } from "../../api/getContent";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_LOCAL_URL;

export const getLocalCategories = async () => {
  try {
    const response = await getContent(`${BASE_URL}data/search.json`);

    return response.data;
  } catch (error) {
    throw Error("Error fetching news: " + error);
  }
};
