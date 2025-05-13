import axios from "axios";

export const getContent = async (url, params) => {
  try {
    const response = await axios.get(url, { params: params });

    if (typeof response.data !== "object" || response.data === null) {
      throw Error("Error fetching: " + response.data);
    }

    return response.data;
  } catch (error) {
    throw Error("Error fetching news: " + error);
  }
};
