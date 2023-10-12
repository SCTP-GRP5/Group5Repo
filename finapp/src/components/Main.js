//css
import styles from './Main.module.css';

//components
import Home from './Home';
import Stocks from './Stocks';
import Crypto from './Crypto';
import Top20 from './Top20';
import Forex from './Forex';


//library
import {Link, Routes, Route, useNavigate, BrowserRouter} from "react-router-dom";
import React, {useState, useEffect} from "react";


function Main() {

    // ===================================================================================================
    // For Crypto Function - Keep in Main component so the states persists when changing navigation - Jian
    // ===================================================================================================
    const [crypto, setCrypto] = useState([]);
    const [apiOptions, setapiOptions] = useState({
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: {
          from_currency: 'BTC',
          function: 'CURRENCY_EXCHANGE_RATE',
          to_currency: 'USD'
        },
        headers: {
          'X-RapidAPI-Key': 'c4fedd50f1msh06e01901e0e0c05p13c0fejsn99ecc7eed1df',
          'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
      });
      const [timer, setTimer] = useState(60) //timer
      const [time,setTime] = useState(timer) //clock 

    //========================================================================================================
    return(
        <div className={styles.Main}>
            <h1>Header : Financial Logging /Net Worth App</h1>
            <BrowserRouter>
                <nav className={styles.navbar}>
                    <Link className={styles.link} to= "/">Home</Link>
                    <Link className={styles.link} to= "/crypto">Crypto</Link>
                    <Link className={styles.link} to= "/stocks">Stocks</Link>
                    <Link className={styles.link} to= "/top20">Top 20</Link>
                    <Link className={styles.link} to= "/forex">Forex</Link>
                </nav>
                <Routes>
                    <Route path ="/" element ={<Home />} />
                    <Route path = "/crypto" element={<Crypto 
                                                crypto={crypto} 
                                                setCrypto={setCrypto}
                                                apiOptions={apiOptions}
                                                setapiOptions={setapiOptions}
                                                timer={timer}
                                                setTimer={setTimer}  
                                                time={time}
                                                setTime={setTime}
                                                
                                                />}
                                                 />
                    <Route path ="/stocks" element={<Stocks/>}/>
                    <Route path = "/top20" element={<Top20 />} />
                    <Route path ="/forex" element={<Forex/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;