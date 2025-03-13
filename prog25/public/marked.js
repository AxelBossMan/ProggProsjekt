async function fetchStockData() {
    const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=4B5HBYMRCDCC4A6M");
    const data = await response.json();
    console.log(data);
}
fetchStockData();


