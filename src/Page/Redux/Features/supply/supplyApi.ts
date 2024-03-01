

import { baseApi } from "../../Api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDonation: builder.mutation({
      query: (supplyInfo) => ({
        url: "/create-supply",
        method: "POST",
        body: supplyInfo,
      }),
      invalidatesTags: ["supply"],
    }),
    getAllDonation: builder.query({
      query: () => ({
        url: "/all-donation",
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    updateDonation: builder.mutation({
      query: (info) => ({
        url: `/update-donation/${info.id}`,
        method: "PUT",
        body: info,
      }),
      invalidatesTags: ["supply"],
    }),
    deleteDonation: builder.mutation({
      query: (info) => ({
        url: `/delete-donation/${info.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["supply"],
    }),
    getSingleDonation: builder.query({
      query: (info) => ({
        url: `/donation/${info.id}`,
        method: "GET",
      }),
      providesTags: ["supply"],
    }),
    getLeaderBoardData: builder.query({
      query: () => ({
        url: "/leaderboard",
        method: "GET",
      }),
      providesTags: ["supply"],
      transformResponse: (response: any) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useAddDonationMutation, useGetAllDonationQuery, useUpdateDonationMutation, useDeleteDonationMutation, useGetSingleDonationQuery, useGetLeaderBoardDataQuery } = supplyApi;