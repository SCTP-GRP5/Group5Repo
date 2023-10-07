import styles from "./ETF.module.css";
import apiETF from "../api/api_etf";

import ETFTable from "./ETFTable";


import { useEffect, useState } from "react";
import axios from "axios";

function ETF() {
  // usestates here
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const loadData = async () => {
    try {
        setIsLoading(true)
      const response = await axios.request(apiETF);
      setData(response.data.data)
      console.log(data)
      // gotta access the inside of data, even .length produces an error
    } catch (error){
        console.log("❌ error: " + error.message);
    } finally {
        console.log("Load data completed");
        setIsLoading(false)
    }
  }
    return (
      <div className={styles.ETF}>
        <h1>ETF</h1>
        <button onClick={loadData}>Load Data</button>
        {isLoading && <p>⏳ Loading...</p>}
        <ETFTable list={data} />
      </div>
    );
  };

export default ETF;
