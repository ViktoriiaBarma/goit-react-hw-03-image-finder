import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const API_KEY = '37050483-79f0c6d80321c8607f56d1e8b';

export const getImg = async (searchText, page) => {
  try {
    const response = await axios.get(BASEURL, {
      params: {
        q: searchText,
        page: page,
        key: API_KEY,
        image_type: "photo",
        orientation: "horizontal",
        per_page: 12,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getImg;


