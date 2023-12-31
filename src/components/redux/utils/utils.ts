import { FeedArticle, GlobalFeedInDTO } from "../dto/globalFeedIn";
import { RootState } from "../store";

export const transformResponse = (response: GlobalFeedInDTO) => {
  return {
    articles: response.articles || [],
    articlesCount: response.articlesCount || 0,
  };
};

const updateFeed = <Q>(
  feedKey: string,
  data: { article: FeedArticle },
  feedKeys: string[],
  state: RootState,
  dispatch: any,
  feedApi: any
) => {
  for (
    let i = 0, key = feedKeys[i], queryItem = state.feedApi.queries[key];
    i < feedKeys.length;
    i++, key = feedKeys[i], queryItem = state.feedApi.queries[key]
  ) {
    if (!key.startsWith("getGlobalFeed")) {
      continue;
    }
    dispatch(
      feedApi.util.updateQueryData(
        "getGlobalFeed",
        queryItem?.originalArgs as Q,
        (draft: any) => {
          const updateId = draft.articles.findIndex(
            (article: any) => article.slug === data.article.slug
          );
          if (updateId >= 0) {
            draft.articles[updateId] = data.article;
          }
        }
      )
    );
  }
};

export const replaceCachedArticle = async (
  getState: any,
  queryFulfilled: any,
  dispatch: any,
  feedApi: any
) => {
  const state = getState() as RootState;
  try {
    const { data } = await queryFulfilled;
    const feedKeys = Object.keys(state.feedApi.queries);

    updateFeed("getGlobalFeed", data, feedKeys, state, dispatch, feedApi);
    updateFeed("getProfileFeed", data, feedKeys, state, dispatch, feedApi);
    updateFeed("getSingleArticle", data, feedKeys, state, dispatch, feedApi);
  } catch (error) {}
};
