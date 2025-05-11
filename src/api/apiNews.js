import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}search.json`, {
      params: {
        apiKey: API_KEY,
        page_number: page_number,
        page_size: page_size,
        category,
        keywords,
      },
    });

    const pageNavigation = page_number * page_size - 10;

    response.data.news = response.data.news.filter(
      (n) => !category || n.category.indexOf(category) !== -1
    );

    if (keywords) {
      response.data.news = response.data.news.filter(
        (n) =>
          n.title.indexOf(keywords) !== -1 ||
          n.description.indexOf(keywords) !== -1
      );
    }

    response.data.news = response.data.news.slice(
      pageNavigation,
      pageNavigation + page_size
    );
    response.data.page = page_number;

    return response.data;
  } catch (error) {
    throw Error("Error fetching news: " + error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}categories.json`, {
      params: {
        apiKey: API_KEY,
      },
    });

    return response.data;
  } catch (error) {
    throw Error("Error fetching news: " + error);
  }
};
