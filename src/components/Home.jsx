import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import millify from 'millify';
import { fetchData } from '../services/cryptoApi';
import { Link } from 'react-router-dom';
import { CryptoCurrencies,News } from '../components';

const Home = () => {
  const [globalStats, setGlobalStats] = useState(null);
  const dispatch = useDispatch();
  const { crypto } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (crypto) {
      const allstats = crypto.data?.stats;
      setGlobalStats(allstats);
    }
    
  }, [crypto]);

  
  return (
    <>
          <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Global Crypto Stats</h2>
        {globalStats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Total Cryptocurrencies</h3>
              <p>{millify(globalStats?.total)}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Total Coins</h3>
              <p>{millify(globalStats?.totalCoins)}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Total Market Cap</h3>
              <p>{millify(globalStats?.totalMarketCap)}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Total 24h Volume</h3>
              <p>{millify(globalStats?.total24hVolume)}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Total Markets</h3>
              <p>{millify(globalStats?.totalMarkets)}</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Total Exchanges</h3>
              <p>{ millify(globalStats?.totalExchanges)}</p>
            </div>
          </div>
        )}
      </div>
      <div className="home-heading-container flex justify-around items-center mb-">
        <h2 className="text-2xl font-bold mb-2">Top Cryptocurrencies in the world</h2>
        <h3 className="text-lg text-blue-500">
          <Link to="/cryptocurrencies">Show More</Link>
        </h3>
      </div>
      <CryptoCurrencies /> {/* Display the CryptoCurrencies component */}
      <div className="home-heading-container flex justify-around items-center mt-8 mb-10">
        <h2 className="text-2xl font-bold mb-2">Latest Crypto News</h2>
        <h3 className="text-lg text-blue-500">
          <Link to="/news">Show More</Link>
        </h3>
      </div>
      <News  />
    </>
  );
};

export default Home;
