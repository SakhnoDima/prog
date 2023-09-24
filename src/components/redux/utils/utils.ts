import { GlobalFeedInDTO } from "../dto/globalFeedIn";

export const transformResponse = (response: GlobalFeedInDTO) => {
  return {
    articles: response.articles || [],
    articlesCount: response.articlesCount || 0,
  };
};
