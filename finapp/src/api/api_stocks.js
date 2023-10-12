import axios from 'axios';

const apiStocks = {
  method: 'GET',
  url: 'https://twelve-data1.p.rapidapi.com/stocks',
  params: {
    exchange: 'NASDAQ',
    format: 'json'
  },
  headers: {
    'X-RapidAPI-Key': '1dbacdcddbmsh7e82168e78716bcp1fa75djsnd214fc145997',
    'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
  }
};

const fetchStockData = async () => {
  try {
    const response = await axios.request(apiStocks);
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { fetchStockData };


