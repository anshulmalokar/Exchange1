"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
type Props = {}

export default function TradingContainer({}: Props) {
  const [bids,setBids] = useState([]);
  const [asks,setAsks] = useState([]);

  const getData = async() => {
    const response = await axios.get("https://exchange-proxy.100xdevs.com/api/v1/depth?symbol=SOL_USDC");
    const data = await response.data;
    return data;
  }

  useEffect(() => {
    const fetchData = async () => {
        await getData();
      };
      
      fetchData();
  },[]);

  return (
    <>
        <div className='grid grid-cols-12'>
            <div className='col-span-8'>
                {/* Render graph */}
            </div>
            <div className='col-span-4'>
                {/* Render the table */}
            </div>
        </div>
    </>
  )
}

// bids
// asks