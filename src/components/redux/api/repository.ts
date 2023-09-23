import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../core/axiosBaseQuery";
import { FeedArticle, GlobalFeedInDTO } from "../dto/globalFeedIn";
import { FEED_PAGE_SIZE } from "../../const/const";
import { PopularTagsInDTO } from "../dto/popularTags";

interface GlobalFeedParams {
  page: number;
  tag: string | null;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
      query: ({ page, tag }) => ({
        url: "/articles",
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
      transformResponse: (response: GlobalFeedInDTO) => {
        return {
          articles: response.articles || [],
          articlesCount: response.articlesCount || 0,
        };
      },
    }),
    getPopularTag: builder.query<PopularTagsInDTO, any>({
      query: () => ({
        url: "/tags",
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagQuery } = feedApi;
