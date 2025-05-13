import axios from "axios";

const BASE_URL = "http://localhost:5173/";

export const getLocalNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}data/search.json`);

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
