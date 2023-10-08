import React, { useState, useEffect } from 'react';
import Table from './StockTable';
import { fetchStockData } from '../api/api_stocks';

function Stocks() {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  
    fetchStockData()
      .then((data) => {
        setStocks(data);
      })
      .catch((error) => {
        console.error('Error fetching stock data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); // The empty dependency array [] means this effect runs only once when the component mounts

  return (
    <div>
      <h1>Stocks List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Table stockList={stocks} />
      )}
    </div>
  );
}

export default Stocks;





















