// Top20MostActive.js
import styles from "./Top20Table.module.css"

function Top20MostActive({data=[], handlerDisplayChart}){
    return (
        <div> 
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Ticker</th>
                        <th>Price</th>
                        <th>Change (Amount)</th>
                        <th>Change (%)</th>
                        <th>Volume</th>
                        <th>Chart Display</th>
                        {console.log(data.length)}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 &&
                    data.map((item) => (
                        <tr key={item.id}>
                        <td>{item.ticker}</td>
                        <td>{item.price}</td>
                        <td>{item.change_amount}</td>
                        <td>{item.change_percentage}</td>
                        <td>{item.volume}</td>
                        <td onClick={() => handlerDisplayChart(item.id)}> 📈</td>
                        </tr>
                        ))}
                </tbody>
    
            </table>
        </div>
                )}

export default Top20MostActive