// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders = {
//   'x-rapidapi-key': 'a5c472b791mshf6d33bfd9b6bed6p11fb87jsn8e3e548e6f1f',
//   'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
// };

// const baseUrl = 'https://coinranking1.p.rapidapi.com';

// const createRequest = (url) => ({
//   url,
//   headers: cryptoApiHeaders,
// });

// export const cryptoApi = createApi({
//   reducerPath: 'cryptoApi',
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getCryptos: builder.query({
//       query: (count) => createRequest(`/coins?limit=${count}`),
//     }),
//   }),
// });

// export const { useGetCryptosQuery } = cryptoApi;

import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

// Replace 'YOUR_RAPIDAPI_HOST' and 'YOUR_RAPIDAPI_KEY' with your actual values
const RAPIDAPI_HOST = 'coinranking1.p.rapidapi.com';
const RAPIDAPI_KEY = '91bbaf3161msh2fad8cdcdd2a528p1cb7cejsnd3ee79efd1c6';

export const fetchData = createAsyncThunk(
  'fetchData',
  async () => {
    try {
      const response = await axios.get('https://coinranking1.p.rapidapi.com/coins', {
        headers: {
          'x-rapidapi-host': RAPIDAPI_HOST,
          'x-rapidapi-key': RAPIDAPI_KEY
        }
      });
      
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch data from RapidAPI.');
    }
  }
);



const cryptoSlice = createSlice({
  name:'crypto',
  initialState:{
    crypto:[],
    loading:false,
    coinSearch:[],
    error:null,
  },
  reducers:{
    searchCoin:(state,action)=>{
      state.coinSearch = action.payload
    }
  },
  extraReducers:(builder)=>{
builder
.addCase(fetchData.pending, (state) => {
  state.loading = true;
  state.error = null;
})
.addCase(fetchData.fulfilled, (state, action) => {
  state.loading = false;
  state.crypto = action.payload;
})
.addCase(fetchData.rejected, (state, action) => {
  state.loading = false;
  state.error = action.error.message;
});
  }
})
export default cryptoSlice.reducer;
export const {searchCoin} = cryptoSlice.actions;