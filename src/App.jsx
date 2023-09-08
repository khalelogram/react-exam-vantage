import PriceCard from "./PriceCard"

function App() {
  

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-row flex-wrap justify-around gap-8 ">
        <PriceCard exchange='BTCUSD' />
        <PriceCard exchange='ETHUSD' />
        <PriceCard exchange='USDPHP' />
        <PriceCard exchange='JPYUSD' />
      </div>
    </div>
  )
}

export default App
