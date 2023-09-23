import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../core/axiosBaseQuery";
import { GlobalFeedInDTO } from "../dto/globalFeedIn";

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedInDTO, any>({
      query: () => ({
        url: "/articles",
        method: "get",
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;
