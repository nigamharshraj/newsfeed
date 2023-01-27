import axios from 'axios';

export const getHeadline = async () => {
  try {
    const response = await axios.get('http://your-backend-url/headline');
    return response.data.headline;
  } catch (error) {
    console.error(error);
    return 'Error fetching headline';
  }
};
