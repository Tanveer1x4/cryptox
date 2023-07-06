import React, { useState, useEffect } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../services/cryptoApi';
import { searchCoin } from '../services/cryptoApi';

const CryptoCurrencies = () => {
  const [coins, setCoins] = useState([]);
  const [searchData,setSearchData]= useState("")
  const dispatch = useDispatch();
  const { crypto,coinSearch} = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchData());
    dispatch(searchCoin(searchData))
  }, [dispatch,searchData]);

  useEffect(() => {
    if (crypto) {
      const myCoins = crypto.data?.coins;
      setCoins(myCoins);
    }
  }, [crypto]);


  return (
    
  
    <>
    <div class="p-4">
    <input
      type="text"
      class="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
      placeholder="Search..."
      onChange={(e)=>setSearchData(e.target.value)}
    />
  </div>
  
  
      <div className="crypto-card-container grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {coins &&
          coins.filter((ele)=>{
            if(coinSearch.length===0){
              return ele
            }else{
              return ele.name.toLowerCase().includes(coinSearch.toLowerCase())
            }
          })
        .map((currency) => (
          <div className="crypto-card bg-white rounded-lg shadow-md p-4" key={currency.id}>
            <Link to={`/crypto/${currency?.id}`} className="flex flex-col items-center">
              <img
                className="crypto-image w-16 h-16 mb-2 rounded-full"
                src={currency.iconUrl}
                alt={currency.name}
              />
              <h4 className="crypto-rank text-lg font-bold mb-2">
                {currency.rank}. {currency.name}
              </h4>
              <p className="crypto-price">Price: {millify(currency?.price)}</p>
              <p className="crypto-market-cap">Market Cap: {millify(currency?.marketCap)}</p>
              <p className="crypto-daily-change">Daily Change: {millify(currency?.change)}</p>
            </Link>
          </div>
        ))}
      </div>

    </>
    
  );
};

export default CryptoCurrencies;
