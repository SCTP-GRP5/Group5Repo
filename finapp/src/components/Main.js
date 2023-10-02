//css
import styles from './Main.module.css';

//components
import Home from './Home';
import Stocks from './Stocks';
import Currency from './Currency';


//library
import {Link, Routes, Route, useNavigate, BrowserRouter} from "react-router-dom";

function Main() {

    return(
        <div className={styles.Main}>
            <h1>Main</h1>
            <BrowserRouter>
                <nav>
                <Link to= "/">Home</Link>
                <Link to= "/currency">Currency</Link>
                <Link to= "/stocks">Stocks</Link>

                </nav>
                <Routes>
                    <Route path ="/" element ={<Home />} />
                    <Route path = "/currency" element={<Currency />} />
                    <Route path ="/stocks" element={<Stocks/>}/>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default Main;