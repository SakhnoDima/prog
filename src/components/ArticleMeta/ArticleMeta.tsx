import { ComponentProps, FC } from "react";
import ArticleAuthor, {
  ArticleStyleEnum,
} from "../ArticleAuthor/ArticleAuthor";
import ButtonProfile from "../ProfileModule/componentsProfile/ButtonProfile";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import { Author } from "../redux/dto/globalFeedIn";

interface IArticleMeta {
  authorNameStile?: ComponentProps<typeof ArticleAuthor>["nameStile"];
  authorDirection?: ComponentProps<typeof ArticleAuthor>["direction"];
  authorNameSize?: ComponentProps<typeof ArticleAuthor>["nameSize"];
  isFavorited: boolean;
  author: Author;
  createdAt: string;
  likes?: number;
  showBtn?: boolean;
  slug: string;
}

const ArticleMeta: FC<IArticleMeta> = ({
  authorNameStile = ArticleStyleEnum.LIGHT,
  author,
  createdAt,
  likes,
  showBtn = true,
  authorDirection,
  authorNameSize,
  slug,
  isFavorited,
}) => {
  return (
    <div>
      <div className="inline-block">
        <ArticleAuthor
          author={author}
          createdAt={createdAt}
          nameStile={authorNameStile}
          direction={authorDirection}
          nameSize={authorNameSize}
        />
      </div>
      {showBtn && (
        <div className="inline-flex gap-4">
          <ButtonProfile user={author.username} btnStyle="LIGHT" />
          <FavoriteBtn
            count={likes || 0}
            extended={true}
            slug={slug}
            isFavorited={isFavorited}
          />
        </div>
      )}
    </div>
  );
};

export default ArticleMeta;
