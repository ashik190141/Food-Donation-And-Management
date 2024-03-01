import { baseApi } from "../../Api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addGratitude: builder.mutation({
      query: (postInfo) => ({
        url: "/community",
        method: "POST",
        body: postInfo,
      }),
      invalidatesTags: ["gratitude"],
    }),
    getAllGratitude: builder.query({
      query: () => ({
        url: "/community",
        method: "GET",
      }),
      providesTags: ["gratitude"],
    }),
  }),
});

export const {
    useAddGratitudeMutation,
    useGetAllGratitudeQuery
} = supplyApi;
