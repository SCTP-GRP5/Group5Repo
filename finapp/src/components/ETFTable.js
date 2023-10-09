import styles from "./ETFTable.module.css"

function ETFTable({ list }) {
    return (
      <div>
       <p></p>
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Currency</th>
                <th>Exchange</th>
                <th>Country</th>
            </tr>
            </thead>
            <tbody>
                {list.length > 0 &&
                list.map((item) => (
                    <tr key={item}>
                    <td>{item.symbol}</td>
                    <td>{item.name}</td>
                    <td>{item.currency}</td>
                    <td>{item.exchange}</td>
                    <td>{item.country}</td>
                </tr>
                ))}
                {console.log(list)}
            </tbody>
        </table>      
      </div>
    );
  }
  
  export default ETFTable;