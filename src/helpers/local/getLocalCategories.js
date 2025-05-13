import axios from "axios";

const BASE_URL = "http://localhost:5173/";

export const getLocalCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}data/categories.json`);

    return response.data;
  } catch (error) {
    throw Error("Error fetching news: " + error);
  }
};
