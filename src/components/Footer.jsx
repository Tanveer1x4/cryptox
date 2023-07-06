import React from 'react';
import { FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-4 h-full">
      <div className="container mx-auto flex items-center justify-around">
          <div>
              <h1 className='text-center text-white  text-3xl text-bold italic'>Crypto The Future</h1>
          </div>
          <div className='flex justify-around'>
        <Link
          to="/github"
          className="mr-10 text-white hover:text-gray-900"
        >
          <FaGithub size={25} />
        </Link>
        <Link
          to="/youtube"
          className="mr-10 text-white hover:text-gray-900"
        >
          <FaYoutube size={25} />
        </Link>
        <Link
          to="/instagram"
          className="mr-10 text-white hover:text-gray-900"
        >
          <FaInstagram size={25} />
        </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
