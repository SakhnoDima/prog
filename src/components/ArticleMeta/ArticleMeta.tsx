import { FC } from "react";
import ArticleAuthor, {
  ArticleStyleEnum,
} from "../ArticleAuthor/ArticleAuthor";
import ButtonProfile from "../ProfileModule/componentsProfile/ButtonProfile";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";

interface IArticleMeta {
  authorNameStile?: keyof typeof ArticleStyleEnum;
}

const ArticleMeta: FC<IArticleMeta> = ({
  authorNameStile = ArticleStyleEnum.LIGHT,
}) => {
  return (
    <div>
      <div className="inline-block">
        <ArticleAuthor
          author={{
            username: "Stich",
            image: "df",
            following: false,
          }}
          createdAt={new Date().toISOString()}
          nameStile={authorNameStile}
        />
      </div>
      <div className="inline-flex gap-4">
        <ButtonProfile user="Stich" btnStyle="LIGHT" />
        <FavoriteBtn count={23} extended={true} />
      </div>
    </div>
  );
};

export default ArticleMeta;
