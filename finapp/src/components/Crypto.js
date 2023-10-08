// css
import styles from './Crypto.module.css';
//library- function
import axios from 'axios';
import React, {useState, useEffect} from "react";
//library-styling
import { PropagateLoader , ClockLoader} from 'react-spinners';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faServer } from '@fortawesome/free-solid-svg-icons'


function Crypto({crypto, setCrypto,apiOptions, setapiOptions,time, setTime, timer, setTimer}) {

    // for loading display
    const [isLoading , setisLoading] = useState(false);

    // clock function -display remaining time only
    useEffect(()=>{
      const interval = setInterval(()=>{
        setTime((seconds)=>(seconds - 1))} ,1000);
      return ()=>clearInterval(interval);
    },[]);

    // timer function in seconds, loadCrypto auto activates - useEffect if there are changes
    // in timer or apiOptions state
    useEffect(()=>{
      const interval = setInterval(()=>{
        loadCrypto(apiOptions);
        setTime(timer)} ,1000*timer);
      return ()=>clearInterval(interval);
    },[timer,apiOptions]);

    // change clock reset - useEffect, when timer changes, time via setTime also needs to change
    useEffect(()=> {
      setTime(timer)
    }, [timer])

    // handler for timer change
    const handlerTimer = (e) =>{
      setTimer(e.target.value); //changes timer duration
      setTime (timer) //resets the clock
    }

    // for choosing crypto options
    const cryptoOptions = [
      {
        name:"Bitcoin",
        value:"BTC",
      },
      {
        name:"DogeCoin",
        value:"DOGE",
      },
      {
        name:"Ethereum",
        value:"ETH",
      },
      {
        name:"Polygon",
        value:"MATIC",
      },
      {
        name:"Binance-Coin",
        value:"BNB",
      },
      {
        name:"Ripple-Coin",
        value:"XRP",
      },
      {
        name:"Cardano",
        value:"ADA",
      },
      {
        name:"Avalanche",
        value:"AVAX",
      },
      {
        name:"Thorchain",
        value:"RUNE",
      },
      { name: "SHIBA_INU",
        value: "SHIB",
      },
      { name: "Uniswap",
      value: "UNI",
      },
      { name: "Monero",
        value: "XMR",
      },
      { name: "ChainLink",
        value: "LINK",
      },
    ]

    const currencyOptions = [
      {
        name:"United States Dollar",
        value:"USD",
      },
      {
        name:"Singapore Dollars",
        value:"SGD",
      },
      {
        name:"Euro",
        value:"EUR",
      },
      {
        name:"British Pound Sterling",
        value:"GBP",
      },
      {
        name:"Canadian Dollar",
        value:"CAD",
      },
      {
        name:"Malaysian Ringgit",
        value:"MYR",
      },
      {
        name:"Chinese Yuan",
        value:"CNY",
      },
      {
        name:"Indian Rupee",
        value:"INR",
      },
      {
        name:"Australian Dollar",
        value:"AUD",
      },
      {
        name:"New Zealand Dollar",
        value:"NZD",
      },
    ]
    
    //font awesome icons
    const laptopIcon = <FontAwesomeIcon icon={faLaptopCode} size="2xs"/>
    const serverIcon = <FontAwesomeIcon icon={faServer} size="2xs"/>

  
    // get API function
    const loadCrypto = async () => {

          setisLoading(true);
          try {
              const response = await axios.request(apiOptions);
              console.log(response.data);
              console.log("Obj unpacked:",response.data["Realtime Currency Exchange Rate"])

              // array of objects
              setCrypto((prevCrypto)=> [... prevCrypto, response.data["Realtime Currency Exchange Rate"]])


          } catch (error) {
              console.error(error);
              setisLoading(false);
          }
          finally {
            setisLoading(false);

          }
    }

    // cryto selector
    const handlerChange = (e) => {

      setapiOptions ((prevOptions)=>
      ({...prevOptions, 
        params: {...prevOptions.params, [e.target.name]: e.target.value}})
      
      )
      console.log("api optons -->0", apiOptions)
      console.log("crypto -->", apiOptions["params"]["from_currency"])
    }

    // console log testing
    const handlerTest = async () =>{
      try {
        const response = await axios.request({
          method: 'GET',
          url: 'https://alpha-vantage.p.rapidapi.com/query',
          params: {
            from_currency: 'LINK',
            function: 'CURRENCY_EXCHANGE_RATE',
            to_currency: 'USD'
          },
          headers: {
            'X-RapidAPI-Key': 'c4fedd50f1msh06e01901e0e0c05p13c0fejsn99ecc7eed1df',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
          }
        });
        console.log(response.data);
        console.log("Obj unpacked:",response.data["Realtime Currency Exchange Rate"])

    } catch (error) {
        console.error(error);
        setisLoading(false);
    }
    finally {
      setisLoading(false);

    }
    }

//=========================================================================================================================================
    return(
        <div className={styles.Crypto}>
            <h1>Crypto</h1>

            <loading className={styles.loading}>
              <FontAwesomeIcon icon={faLaptopCode} size="2xl" className={styles.icon}/>

              <div className={styles.loader}>
                <PropagateLoader loading={isLoading}  color={"#0000ff"}/>
              </div>
              
              <FontAwesomeIcon icon={faServer} size="2xl" className={styles.icon}/>
            </loading>
            <button onClick={()=>loadCrypto()}>Get Data</button>

            <select name="from_currency" onChange = {handlerChange} value={apiOptions["params"]["from_currency"]}>
                  {cryptoOptions.map((item,index)=> (
                    <option key={index} value={item.value}>{item.name} </option>
                  ))}
                  <button type="submit">Submit</button>
            </select>
       
            <select name="to_currency" onChange = {handlerChange} value={apiOptions["params"]["to_currency"]}>
                  {currencyOptions.map((item,index)=> (
                    <option key={index} value={item.value}>{item.name} </option>
                  ))}
                  <button type="submit">Submit</button>
            </select>
            
            {/* Manual Testing Mode */}
            {/* <button onClick={handlerTest}>Console Log Test</button> */}

           <p> {time} seconds</p> 

           <select name="timer" onChange={handlerTimer} value ={timer}>
                  <option value={60}>1 minute</option>
                  <option value={180}>3 minutes</option>
                  <option value={300}>5 minutes</option>
                  <option value={15}>DEMO 15 secs</option>
           </select>

            <table>
                <tr>
                    <th>#</th>
                    <th>Crypto Code</th>
                    <th>Cypto Name</th>
                    {/* <th>Currency Code</th> */}
                    <th>Currency Name</th>
                    <th>Exchange Rate</th>
                    <th>Time</th>
                    <th>Time Zone</th>
                    <th>Bid Price</th>
                    <th>Ask Price</th>
                </tr>
                {crypto.map((item, keys) =>
                (
                    <tr key={keys}>
                      <td>{keys+1}</td>
                       <td>{item["1. From_Currency Code"]}</td>
                       <td>{item["2. From_Currency Name"]}</td>
                       {/* <td>{item["3. To_Currency Code"]}</td> */}
                       <td>{item["4. To_Currency Name"]}</td>
                       <td>{parseFloat(item["5. Exchange Rate"]).toFixed(2)}</td>
                       <td>{item["6. Last Refreshed"]}</td>
                       <td>{item["7. Time Zone"]}</td>
                       <td>{item["3. To_Currency Code"]}{parseFloat(item["8. Bid Price"]).toFixed(2)}</td>
                       <td>{item["3. To_Currency Code"]}{parseFloat(item["9. Ask Price"]).toFixed(2)}</td>
                   </tr>
                ))}
                  <tr>
                    <th>#</th>
                    <th>Crypto Code</th>
                    <th>Cypto Name</th>
                    {/* <th>Currency Code</th> */}
                    <th>Currency Name</th>
                    <th>Exchange Rate</th>
                    <th>Time</th>
                    <th>Time Zone</th>
                    <th>Bid Price</th>
                    <th>Ask Price</th>
                </tr>

            </table>

        
        </div>
    );
}

export default Crypto;

/*
Data Type
{
  "Realtime Currency Exchange Rate": {
    "1. From_Currency Code": "BTC",
    "2. From_Currency Name": "Bitcoin",
    "3. To_Currency Code": "USD",
    "4. To_Currency Name": "United States Dollar",
    "5. Exchange Rate": "10347.92000000",
    "6. Last Refreshed": "2020-02-12 19:05:01",
    "7. Time Zone": "UTC",
    "8. Bid Price": "10347.91000000",
    "9. Ask Price": "10348.63000000"
  }
}
*/
