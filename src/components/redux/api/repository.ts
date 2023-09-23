import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../core/axiosBaseQuery";
import { GlobalFeedInDTO } from "../dto/globalFeedIn";
import { FEED_PAGE_SIZE } from "../../const/const";

interface GlobalFeedParams {
  page: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedInDTO, GlobalFeedParams>({
      query: ({ page }) => ({
        url: "/articles",
        method: "get",
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
        },
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;
