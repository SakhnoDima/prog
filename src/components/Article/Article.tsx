import { FC } from "react";
import { Link } from "react-router-dom";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import TagList from "../TagList/TagList";
import { FeedArticle } from "../redux/dto/globalFeedIn";
import ArticleAuthor from "../ArticleAuthor/ArticleAuthor";

interface IArticleProps extends FeedArticle {}

const Article: FC<IArticleProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
  slug,
  favorited,
}) => {
  return (
    <article>
      <div className="border-t border-solid border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <ArticleAuthor author={author} createdAt={createdAt} />
          <FavoriteBtn
            count={favoritesCount}
            slug={slug}
            isFavorited={favorited}
          />
        </div>
        <Link to={`/article/${encodeURIComponent(slug)}`}>
          <h1 className="mp-1 font-semibold text-2xl text-conduit-black">
            {title}
          </h1>
          <p className="text-conduit-lightBlack font-light mb-1">
            {description}
          </p>
          <div className="flex justify-between">
            <span className="text-conduit-gray text-date font-light">
              Read more...
            </span>
            <TagList list={tagList} />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Article;
