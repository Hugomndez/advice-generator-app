const API_URL = 'https://api.adviceslip.com/advice';

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const { slip } = await response.json();
    return [slip.id, slip.advice];
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
