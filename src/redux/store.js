import { configureStore } from '@reduxjs/toolkit';
import  cryptoDetail from '../services/cryptoApi';
import cryptoNews from '../services/cryptoNewsAPi'

export default configureStore({

  reducer: {
  app: cryptoDetail,
  appnews:cryptoNews,
  },
  
});
