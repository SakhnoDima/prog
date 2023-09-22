import { FC } from "react";
import Article from "../Article/Article";

interface IArticleList {}

const ArticleList: FC<IArticleList> = () => {
  return (
    <div className="w-3/4">
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
};

export default ArticleList;
