import styles from './StockTable.module.css';

function Table({ stockList }) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Currency</th>
            <th>Exchange</th>
            <th>MIC Code</th>
            <th>Country</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {/* Check if stockList is defined and not empty before mapping */}
          {stockList && stockList.length > 0 ? (
            stockList.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.symbol}</td>
                <td>{stock.name}</td>
                <td>{stock.currency}</td>
                <td>{stock.exchange}</td>
                <td>{stock.MIC}</td>
                <td>{stock.country}</td>
                <td>{stock.type}</td>
              </tr>
            ))
          ) : (
            // Display a message if stockList is empty or undefined
            <tr>
              <td colSpan="7">No stock data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

