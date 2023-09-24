import clsx from "clsx";
import { FC } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

interface IFeedToggleItem {
  text: string;
  link: string;
}

interface IFeedToggle {
  defaultText?: string;
  defaultLink?: string;
  items?: IFeedToggleItem[];
}

const FeedToggle: FC<IFeedToggle> = ({
  defaultText = "Global Feed",
  defaultLink = "/",
  items = [],
}) => {
  const [serchParams] = useSearchParams();
  const tag = serchParams.get("tag");

  const globalFeedClasses = ({ isActive }: { isActive: boolean }) =>
    clsx("border-conduit-green bg-white py-2 px-4  ", {
      "text-black/30  hover:text-black/60 ": tag || !isActive,
      "border-b-2 cursor-default": !tag && isActive,
    });

  return (
    <div className="h-8">
      <ul className="flex">
        <li>
          <NavLink to={defaultLink} className={globalFeedClasses} end>
            {defaultText}
          </NavLink>
          {items.map((item) => (
            <NavLink
              key={item.link}
              to={item.link}
              className={globalFeedClasses}
            >
              {item.text}
            </NavLink>
          ))}
          {tag && (
            <span className=" bg-white text-conduit-green border-b-2 border-conduit-green py-2 px-4 ">
              #{tag}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
