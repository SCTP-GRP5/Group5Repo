const forexAPI = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {
    from_symbol: 'EUR',
    function: 'FX_DAILY',
    to_symbol: 'USD',
    outputsize: 'compact',
    datatype: 'json'
  },
  headers: {
    'X-RapidAPI-Key': '23133210ecmsh5d669ddcf54d2c7p1068dajsnc84e8b19ba5f',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

export default forexAPI;
