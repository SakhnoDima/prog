export interface GlobalFeedInDTO {
  articles: FeedArticle[];
  articlesCount: number;
}

export interface FeedArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
  id: string;
}

export interface Author {
  username: string;
  bio?: any;
  image: string;
  following: boolean;
}
