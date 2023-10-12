const stockAPI = {
  method: 'GET',
  url: 'https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=ND8F92JJJJEUYSOY',
  params: {
    function: 'TIME_SERIES_MONTHLY',
    symbol: 'IBM',
    datatype: 'json',
  },
};
export default stockAPI;


