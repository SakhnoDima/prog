import { FC } from "react";
import { Link } from "react-router-dom";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import TagList from "../TagList/TagList";

interface IArticle {}

const Article: FC<IArticle> = () => {
  return (
    <article>
      <div className="border-t border-solid border-black/10 py-6">
        <div className="mb-4 font-light flex">
          <Link to="/@user">
            <img
              src="	https://api.realworld.io/images/demo-avatar.png"
              alt="nokwin avatar"
              className="inline-block h-8 w-8 rounded-full"
            />
          </Link>
          <div className="mr-6 ml-0.3 inline-flex leading-4 flex-col ">
            <Link
              to="/@user"
              className="font-medium hover:text-conduit-darkGreen hover:underline"
            >
              Stich
            </Link>
            <span className="text-conduit-gray text-date">22 sept 2023</span>
          </div>
          <FavoriteBtn />
        </div>
        <Link to="/article/qwerty">
          <h1 className="mp-1 font-semibold text-2xl text-conduit-black">
            Some Title
          </h1>
          <p className="text-conduit-lightBlack font-light mb-1">
            Assumenda molestiae laboriosam enim ipsum quaerat enim officia vel
            quo. Earum odit rem natus totam atque cumque. Sint dolorem facere
            non.
          </p>
          <div className="flex justify-between">
            <span className="text-conduit-gray text-date font-light">
              Read more...
            </span>
            <TagList />
          </div>
        </Link>
      </div>
    </article>
  );
};

export default Article;
