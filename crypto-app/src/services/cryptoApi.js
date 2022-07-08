import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeader ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
'x-rapidapi-key': 'b6a4e650fcmsh480d45aac047dbep1e505ajsn180ba82c6d98'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest =(url)=> ({ url,headers: cryptoApiHeader})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
     getCryptoDetails:builder.query({
        query: (coinId) => createRequest(`/coin/$${coinId}`),
     })
    })
})

export const {
    useGetCryptosQuery , useGetCryptoDetailsQuery
} = cryptoApi;

  