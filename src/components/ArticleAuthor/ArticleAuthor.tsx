import { FC } from "react";
import { Link } from "react-router-dom";
import { Author } from "../redux/dto/globalFeedIn";
import { DateTime } from "luxon";
import clsx from "clsx";

export enum ArticleStyleEnum {
  LIGHT = "LIGHT",
  GREEN = "GREEN",
}

enum MetaDirection {
  ROW = "ROW",
  COL = "COL",
}

enum NameSizeEnum {
  SM = "SM",
  BASE = "BASE",
}

interface IArticleAuthor {
  author: Author;
  createdAt: string;
  nameStile?: keyof typeof ArticleStyleEnum;
  direction?: keyof typeof MetaDirection;
  nameSize?: keyof typeof NameSizeEnum;
}

const ArticleAuthor: FC<IArticleAuthor> = ({
  author,
  createdAt,
  nameStile = ArticleStyleEnum.GREEN,
  direction = MetaDirection.COL,
  nameSize = NameSizeEnum.BASE,
}) => {
  const userNameClasses = clsx(
    "font-medium hover:text-conduit-darkGreen hover:underline",
    {
      "text-white hover:text-white": nameStile === ArticleStyleEnum.LIGHT,
      "text-date": nameSize === NameSizeEnum.SM,
    }
  );
  const directionClass = clsx("mr-6 ml-0.3 inline-flex leading-4 ", {
    "flex-col ": direction === MetaDirection.COL,
    "flex-row items-center gap-2": direction === MetaDirection.ROW,
  });
  const imgClass = clsx("inline-block rounded-full", {
    "h-8 w-8": nameSize === NameSizeEnum.BASE,
    "h-5 w-5": nameSize === NameSizeEnum.SM,
  });
  return (
    <div className="flex">
      <Link to={`/${encodeURIComponent(author.username)}`}>
        <img
          src={author.image}
          alt={`${author.username} avatar`}
          className={imgClass}
        />
      </Link>
      <div className={directionClass}>
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
