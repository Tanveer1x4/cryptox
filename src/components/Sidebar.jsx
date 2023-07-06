import React from 'react';
import { FaHome, FaCoins, FaNewspaper, FaExchangeAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 h-full  flex flex-col items-center">
      <Link to="/" className="my-4">
        <img src="https://cdn.cnn.com/cnnnext/dam/assets/210503123938-ethereum-cryptocurrency---stock-super-tease.jpg" alt="Logo" className="rounded-full w-20 h-20" />
      </Link>
      <nav className="flex flex-col items-center mt-8 justify-center">
        <Link
          to="/"
          className="mb-4 p-2 flex items-center rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-300"
        >
          <FaHome size={20} className="mr-2" />
          <span className="hidden md:inline">Home</span>
        </Link>
        <Link
          to="/cryptocurrencies"
          className="mb-4 p-2 flex items-center rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-300"
        >
          <FaCoins size={20} className="mr-2" />
          <span className="hidden md:inline">Crypto</span>
        </Link>
        <Link
          to="/news"
          className="mb-4 p-2 flex items-center rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-300"
        >
          <FaNewspaper size={20} className="mr-2" />
          <span className="hidden md:inline">News</span>
        </Link>
        <Link
          to="/about"
          className="mb-4 p-2 flex items-center rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-300"
        >
          <FaExchangeAlt size={20} className="mr-2" />
          <span className="hidden md:inline">About</span>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
