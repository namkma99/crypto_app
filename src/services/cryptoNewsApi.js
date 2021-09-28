import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-bingapis-sdk": process.env.REACT_APP_NEWS_RAPIDAPI_SDK,
  "x-rapidapi-host": process.env.REACT_APP_NEWS_RAPIDAPI_HOST,
  "x-rapidapi-key": process.env.REACT_APP_NEWS_RAPIDAPI_KEY,
};

const baseUrl = process.env.REACT_APP_NEWS_RAPIDAPI_URL;

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
