//css
import styles from './Main.module.css';

//components
import Home from './Home';
import Stocks from './Stocks';
import Currency from './Currency';
import ETF from './ETF';
import Forex from './Forex';


//library
import {Link, Routes, Route, useNavigate, BrowserRouter} from "react-router-dom";

function Main() {

    return(
        <div className={styles.Main}>
            <h1>Header : Financial Logging /Net Worth App</h1>
            <BrowserRouter>
                <nav className={styles.navbar}>
                    <Link className={styles.link} to= "/">Home</Link>
                    <Link className={styles.link} to= "/currency">Currency</Link>
                    <Link className={styles.link} to= "/stocks">Stocks</Link>
                    <Link className={styles.link} to= "/etf">ETF</Link>
                    <Link className={styles.link} to= "/forex">Forex</Link>
                </nav>
                <Routes>
                    <Route path ="/" element ={<Home />} />
                    <Route path = "/currency" element={<Currency />} />
                    <Route path ="/stocks" element={<Stocks/>}/>
                    <Route path = "/etf" element={<ETF />} />
                    <Route path ="/forex" element={<Forex/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Main;