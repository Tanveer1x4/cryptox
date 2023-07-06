// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
//   headers: {
//     'X-RapidAPI-Key': 'a5c472b791mshf6d33bfd9b6bed6p11fb87jsn8e3e548e6f1f',
//     'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// dataSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch data
const RAPID_API_HOST ='cryptocurrency-news2.p.rapidapi.com';
const RAPID_API_KEY = '0489a0a105msh64c0ea7c5f48245p15a222jsn974ce4a294c0';
export const NewsData = createAsyncThunk(
    'NewsData',
    async () => {
      try {
        const response = await axios.get('https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk', {
          headers: {
            'X-RapidAPI-Host': RAPID_API_HOST,
            'X-RapidAPI-Key': RAPID_API_KEY,
          },
        });
        return response.data;
      } catch (error) {
        throw new Error('Error fetching data');
      }
    }
  );

// Slice definition
const cryptoNewsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    newsSearch:[],
    loading: false,
    error: null,
  },
  reducers: {
    searchNews:(state,action)=>{
      state.newsSearch = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(NewsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(NewsData.fulfilled, (state, action) => {
        state.loading = false;
        state.news= action.payload;
      })
      .addCase(NewsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cryptoNewsSlice.reducer;
export const {searchNews}=cryptoNewsSlice.actions
