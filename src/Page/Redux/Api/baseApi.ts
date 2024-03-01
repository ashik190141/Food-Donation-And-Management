import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://food-donation-and-supply-server.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: ["supply", "gratitude", "volunteer"],
  endpoints: () => ({}),
});
