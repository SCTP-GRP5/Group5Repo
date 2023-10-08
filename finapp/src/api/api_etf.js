//apiETF.js

const apiETF = {
    method: "GET",
  url: "https://twelve-data1.p.rapidapi.com/etf",
  params: {
    exchange: "Euronext",
    format: "json",
  },
  headers: {
    "X-RapidAPI-Key": "ea8c5734f0mshddfeca019d3f833p117bb6jsne38eec50bf5f",
    "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com"
  },
}

export default apiETF;