import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Author } from "../redux/dto/globalFeedIn";
import { DateTime } from "luxon";
import clsx from "clsx";

export enum ArticleStyleEnum {
  LIGHT = "LIGHT",
  GREEN = "GREEN",
}

interface IArticleAuthor {
  author: Author;
  createdAt: string;
  nameStile?: keyof typeof ArticleStyleEnum;
}

const ArticleAuthor: FC<IArticleAuthor> = ({
  author,
  createdAt,
  nameStile = ArticleStyleEnum.GREEN,
}) => {
  const userNameClasses = clsx(
    "font-medium hover:text-conduit-darkGreen hover:underline",
    {
      "text-white hover:text-white": nameStile === ArticleStyleEnum.LIGHT,
    }
  );
  return (
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
          className={userNameClasses}
        >
          {author.username}
        </Link>
        <span className="text-conduit-gray text-date">
          {DateTime.fromISO(createdAt).toLocaleString(DateTime.DATE_FULL)}
        </span>
      </div>
    </div>
  );
};

export default ArticleAuthor;
