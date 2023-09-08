import { useEffect, useState } from 'react'
import axios from 'axios'
import vantageUrls from './vantageUrls'
import numeral from 'numeral'

const PriceCard = ({exchange}) => {
    const [price, setPrice] = useState()
    const [lastCheck, setLastCheck] = useState()

    useEffect(() => {
        async function getData() {
        await axios.get(vantageUrls[exchange]).then((response) => {
            setPrice(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
            setLastCheck(response.data["Realtime Currency Exchange Rate"]["6. Last Refreshed"])
        }).catch((err) => {
            console.log(err);
        })
        }
        getData();
    }, [])
    return (
        
        <div
        className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <div
          className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
         {exchange}
        </div>
        <div className="p-6">
          <h5
            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {numeral(price).format("0,0.[00]")}
          </p>
          
        </div>
        <div
          className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
          Last Refreshed: {lastCheck}
        </div>
      </div>
    )
}

export default PriceCard