import { FC } from "react";
import ArticleAuthor, {
  ArticleStyleEnum,
} from "../ArticleAuthor/ArticleAuthor";
import ButtonProfile from "../ProfileModule/componentsProfile/ButtonProfile";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import { Author } from "../redux/dto/globalFeedIn";

interface IArticleMeta {
  authorNameStile?: keyof typeof ArticleStyleEnum;
  author: Author;
  createdAt: string;
  likes: number;
}

const ArticleMeta: FC<IArticleMeta> = ({
  authorNameStile = ArticleStyleEnum.LIGHT,
  author,
  createdAt,
  likes,
}) => {
  return (
    <div>
      <div className="inline-block">
        <ArticleAuthor
          author={author}
          createdAt={createdAt}
          nameStile={authorNameStile}
        />
      </div>
      <div className="inline-flex gap-4">
        <ButtonProfile user={author.username} btnStyle="LIGHT" />
        <FavoriteBtn count={likes} extended={true} />
      </div>
    </div>
  );
};

export default ArticleMeta;
