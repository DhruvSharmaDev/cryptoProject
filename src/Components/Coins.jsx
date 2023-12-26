import React from 'react'
import { useState, useEffect } from 'react'
import { Baseurl } from './baseURl'
import Loader from './Loader'
import axios from 'axios'
import './Coins.css'
import Header from './Header'
const Coins = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState('inr');
  const currencySymbol = currency === 'inr' ? '₹' : '$'

  useEffect(() => {
    const getCoinData = async () => {
      const { data } = await axios.get(`${Baseurl}/coins/markets?vs_currency=${currency}`);
      console.log(data);
      setCoins(data);
      setLoading(false);
    }
    getCoinData()



  }, [])
  return (
    <>

      {
        loading ? <Loader /> : 
        <>
          <Header />
          <div className="btn">
            <div className='heading'>
              All Coins
            </div>

            <button onClick={() => setCurrency('inr')}>inr</button>
            <button onClick={() => setCurrency('usd')}>usd</button>
          </div>
          <div>

            {
              coins.map((item, i) => {
                return (
                  <CoinCard coindata={item} coinindex={i} currencySymbol={currencySymbol} />
                )

              })
            }

          </div>

        </>

      }

    </>
  )
const CoinCard = ({ item, i, currencySymbol }) => {
  return (
    <div key={i} className='co-cards'>
      <div className="image">
        <img src={item.image} height={60} />
      </div>
      <div className="name">
        {item.name}

      </div>
      <div className="price">
        {currencySymbol}   {item.current_price.toFixed(0)}
      </div>
      <div className="rank">
        {item.market_cap_rank}

      </div>


    </div>

  )
}
}
export default Coins