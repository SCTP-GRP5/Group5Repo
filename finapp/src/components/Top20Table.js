import Top20MostActive from "./Top20MostActive";
import Top20Gainers from "./Top20Gainers";
import Top20Losers from "./Top20Losers";

function Top20Table({ list }) {
  const handlerDisplayChart = (id) => {
    return console.log("chart displayed");
  };

  return (
    <div>
      <h3>Top 20 Most Active</h3>
      <Top20MostActive
        data={list.most_actively_traded}
        handlerDisplayChart={handlerDisplayChart}
      />
      <hr></hr>
      <h3>Top 20 Gainers</h3>
      <Top20Gainers
        data={list.top_gainers}
        handlerDisplayChart={handlerDisplayChart}
      />
      <hr></hr>
      <h3>Top 20 Losers</h3>
      <Top20Losers
        data={list.top_losers}
        handlerDisplayChart={handlerDisplayChart}
      />
    </div>
  );
}

export default Top20Table;
