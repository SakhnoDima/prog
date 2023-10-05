import { createApi } from "@reduxjs/toolkit/query/react";
import { FeedArticle } from "../dto/globalFeedIn";
import { FEED_PAGE_SIZE } from "../../const/const";
import { PopularTagsInDTO } from "../dto/popularTags";
import { replaceCachedArticle, transformResponse } from "../utils/utils";
import { realWorldBaseQuery } from "../../core/api/realworld-base-query";
import { SingleArticleInDTO } from "../dto/singleArticle";
import { ArticleCommentsInDTO } from "../dto/commentsIn";
import { FavoriteArticleInDTO } from "../dto/favoriteArticleIn";

interface IFavoriteArticlesParams {
  slug: string;
}
interface SingleArticlePArams {
  slug: string;
}
interface BaseFeedParams {
  page: number;
}
export interface GlobalFeedParams extends BaseFeedParams {
  tag: string | null;
  isPersonalFeed: boolean;
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
      keepUnusedDataFor: 1,
      query: ({ page, tag, isPersonalFeed }) => ({
        url: isPersonalFeed ? "/articles/feed" : "/articles",
        params: {
          limit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
      transformResponse,
    }),
    getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
      keepUnusedDataFor: 1,
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
      keepUnusedDataFor: 1,
      query: () => ({
        url: "/tags",
      }),
    }),
    getSingleArticle: builder.query<SingleArticleInDTO, SingleArticlePArams>({
      keepUnusedDataFor: 1,
      query: ({ slug }) => ({
        url: `/articles/${slug}`,
      }),
    }),
    getCommentsArticle: builder.query<
      ArticleCommentsInDTO,
      SingleArticlePArams
    >({
      keepUnusedDataFor: 1,
      query: ({ slug }) => ({
        url: `/articles/${slug}/comments`,
      }),
    }),
    getFavoriteArticle: builder.mutation<
      FavoriteArticleInDTO,
      IFavoriteArticlesParams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: "post",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled, getState }) => {
        await replaceCachedArticle(getState, queryFulfilled, dispatch, feedApi);
      },
    }),
    getUnFavoriteArticle: builder.mutation<
      FavoriteArticleInDTO,
      IFavoriteArticlesParams
    >({
      query: ({ slug }) => ({
        url: `/articles/${slug}/favorite`,
        method: "delete",
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled, getState }) => {
        await replaceCachedArticle(getState, queryFulfilled, dispatch, feedApi);
      },
    }),
  }),
});

export const {
  useGetGlobalFeedQuery,
  useGetPopularTagQuery,
  useGetProfileFeedQuery,
  useGetSingleArticleQuery,
  useGetCommentsArticleQuery,
  useGetFavoriteArticleMutation,
  useGetUnFavoriteArticleMutation,
} = feedApi;
