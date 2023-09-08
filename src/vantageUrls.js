const API_KEY = "PUT YOUR API KEY HERE";

const vantageUrls = {
    BTCUSD: `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${API_KEY}`,
    ETHUSD: `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=${API_KEY}`,
    USDPHP: `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=PHP&apikey=${API_KEY}`,
    JPYUSD: `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=JPY&to_currency=USD&apikey=${API_KEY}`
}

export default vantageUrls;