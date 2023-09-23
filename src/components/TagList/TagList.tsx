import clsx from "clsx";
import { FC } from "react";
import { Link } from "react-router-dom";

enum TagListStyle {
  DARK = "DARK",
  LIGHT = "LIGHT",
}

interface ITagListProps {
  list: string[];
  itemStyle?: keyof typeof TagListStyle;
  itemAs?: "li" | "a";
}

const TagList: FC<ITagListProps> = ({
  list,
  itemStyle = TagListStyle.LIGHT,
  itemAs = "li",
}) => {
  const itemClasses = clsx(
    "font-light text-date border mr-1 mb-0.2 px-0.6 rounded-tag",
    {
      "border-conduit-lightGray text-conduit-tagLightGray":
        itemStyle === TagListStyle.LIGHT,
      "bg-conduit-tagItemBg text-white bg-conduit-tagItemBg hover:bg-conduit-tagItemBgHover ":
        itemStyle === TagListStyle.DARK,
    }
  );
  return (
    <ul className="flex flex-wrap">
      {list?.map((tag) => {
        return itemAs === "li" ? (
          <li key={tag} className={itemClasses}>
            {tag}
          </li>
        ) : (
          <Link to={`/?tag=${tag}`} key={tag} className={itemClasses}>
            {tag}
          </Link>
        );
      })}
    </ul>
  );
};

export default TagList;
