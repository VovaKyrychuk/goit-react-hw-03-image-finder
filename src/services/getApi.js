import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

export const getImages = async (searchSubmit, page = 1) => {
  const API_KEY = '34416217-f7adf6063944bf3cac5f08942';
  const response = await axios.get(
    `/?q=${searchSubmit}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.status === 404) {
    throw new Error('Error loading images from Pixabay', response.status);
  }
  return response.data;
};
