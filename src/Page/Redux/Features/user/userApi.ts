import { baseApi } from "../../Api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSupplierInfo: builder.query({
      query: (userInfo) => ({
        url: `/getAllSupply/${userInfo.email}`,
        method: "GET",
      }),
    }),
    getCategoryCount: builder.query({
      query: () => ({
        url: `/categoryCount`,
        method: "GET",
      }),
    }),
    addVolunteer: builder.mutation({
      query: (volunteerInfo) => ({
        url: "/volunteer",
        method: "POST",
        body: volunteerInfo,
      }),
      invalidatesTags: ["volunteer"],
    }),
    addReview: builder.mutation({
      query: (reviewInfo) => ({
        url: "/dashboard/create-testimonial",
        method: "POST",
        body: reviewInfo,
      }),
    }),
    getVolunteer: builder.query({
      query: () => ({
        url: `/volunteer`,
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),
  }),
});

export const { useGetSupplierInfoQuery, useGetCategoryCountQuery, useAddVolunteerMutation, useGetVolunteerQuery, useAddReviewMutation } = userApi;
