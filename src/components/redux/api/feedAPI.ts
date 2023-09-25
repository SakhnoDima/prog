import { createApi } from "@reduxjs/toolkit/query/react";
import { FeedArticle } from "../dto/globalFeedIn";
import { FEED_PAGE_SIZE } from "../../const/const";
import { PopularTagsInDTO } from "../dto/popularTags";
import { transformResponse } from "../utils/utils";
import { realWorldBaseQuery } from "../../core/api/realworld-base-query";
import { SingleArticleInDTO } from "../dto/singleArticle";
import { ArticleCommentsInDTO } from "../dto/commentsIn";

interface SingleArticlePArams {
  slug: string;
}
interface BaseFeedParams {
  page: number;
}
interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
}
interface ProfileFeedParams extends BaseFeedParams {
  isFavorite: boolean;
  author: string;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: realWorldBaseQuery,
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
      transformResponse,
    }),
    getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
      query: ({ page, author, isFavorite = false }) => ({
        url: "/articles",
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          author: isFavorite ? undefined : author,
          favorited: !isFavorite ? undefined : author,
        },
      }),
    }),
    getPopularTag: builder.query<PopularTagsInDTO, any>({
      query: () => ({
        url: "/tags",
      }),
    }),
    getSingleArticle: builder.query<SingleArticleInDTO, SingleArticlePArams>({
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
      }),
    }),
    getCommentsArticle: builder.query<
      ArticleCommentsInDTO,
      SingleArticlePArams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/comments`,
      }),
    }),
  }),
});

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagQuery,
  useGetProfileFeedQuery,
  useGetSingleArticleQuery,
  useGetCommentsArticleQuery,
} = feedApi;
