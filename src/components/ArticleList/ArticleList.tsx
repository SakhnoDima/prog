import { FC } from "react";
import Article from "../Article/Article";
import { FeedArticle } from "../redux/dto/globalFeedIn";

interface IArticleList {
  list: FeedArticle[] | undefined;
}

const ArticleList: FC<IArticleList> = ({ list }) => {
  return (
    <div className="w-3/4">
      {list?.map((article) => (
        <Article key={article.slug} {...article} />
      ))}
    </div>
  );
};

export default ArticleList;
