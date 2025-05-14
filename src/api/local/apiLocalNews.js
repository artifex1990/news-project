import { BASE_URL_LOCAL } from "../../constants/constants";
import { getContent } from "../getContent";

export const getLocalNews = async ({
  page_number = 1,
  page_size = 10,
  category,
  keywords,
}) => {
  try {
    const data = await getContent(`${BASE_URL_LOCAL}data/search.json`);

    const pageNavigation = page_number * page_size - 10;

    data.news = data.news.filter(
      (n) => !category || n.category.indexOf(category) !== -1
    );

    if (keywords) {
      data.news = data.news.filter(
        (n) =>
          n.title.indexOf(keywords) !== -1 ||
          n.description.indexOf(keywords) !== -1
      );
    }

    data.news = data.news.slice(pageNavigation, pageNavigation + page_size);
    data.page = page_number;

    return data;
  } catch (error) {
    throw Error("Error fetching news: " + error);
  }
};

export const getLocalCategories = async () => {
  try {
    const response = await getContent(`${BASE_URL_LOCAL}data/search.json`);

    return response.data;
  } catch (error) {
    throw Error("Error fetching news: " + error);
  }
};
