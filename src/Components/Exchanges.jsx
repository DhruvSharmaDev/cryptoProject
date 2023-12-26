import React from 'react'
import Header from './Header'
import './Exchanges.css'
 import { useState,useEffect } from 'react';
 import axios from 'axios';
 import { Baseurl } from './baseURl';
 import Loader from './Loader';
const Exchanges = () => {
  const [loading,setLoading]=useState(true);
  const [exchanges,setExchanges]=useState([]);

    useEffect(()=>{
        const getExchangesData= async()=>{
            const {data}= await axios.get(`${Baseurl}/exchanges`);
            console.log(data);
            setExchanges(data);
            setLoading(false);
        }
        getExchangesData()
    
            

    },[])
  return (

    <>
    {
        loading? <Loader/>:  <>
        <Header/>
        <div>

             {
                exchanges.map((item,i)=>{
                    return (
                        <div key={i} className='ex-cards'>
                        <div className="image">
                            <img src={item.image} alt="" />

                    
                
                        </div>
                        <div className="name">
                            {item.name}
                
                        </div>
                        <div className="price">
                             {item.trade_volume_24h_btc.toFixed(0)}
                        </div>
                        <div className="rank">
                            {item.trust_score_rank}
                
                        </div>
                
                  
                    </div>
                    )

                })
             }
   
    </div>
      </>
    }
    
    </>
  )
}

export default Exchanges