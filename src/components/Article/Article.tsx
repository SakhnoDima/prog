import { FC } from "react";
import { Link } from "react-router-dom";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import TagList from "../TagList/TagList";
import { FeedArticle } from "../redux/dto/globalFeedIn";
import { DateTime } from "luxon";

interface IArticleProps extends FeedArticle {}

const Article: FC<IArticleProps> = ({
  author,
  createdAt,
  favoritesCount,
  title,
  description,
  tagList,
}) => {
  return (
    <article>
      <div className="border-t border-solid border-black/10 py-6">
        <div className="mb-4 font-light flex justify-between">
          <div className="flex">
            <Link to={`/${encodeURIComponent(author.username)}`}>
              <img
                src={author.image}
                alt={`${author.username} avatar`}
                className="inline-block h-8 w-8 rounded-full"
              />
            </Link>
            <div className="mr-6 ml-0.3 inline-flex leading-4 flex-col ">
              <Link
                to={`/${encodeURIComponent(author.username)}`}
                className="font-medium hover:text-conduit-darkGreen hover:underline"
              >
                {author.username}
              </Link>
              <span className="text-conduit-gray text-date">
                {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}
              </span>
            </div>
          </div>

          <FavoriteBtn count={favoritesCount} />
        </div>
        <Link to="/article/qwerty">
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
