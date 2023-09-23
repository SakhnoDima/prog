import clsx from "clsx";
import { FC } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

interface IFeedToggle {}

const FeedToggle: FC<IFeedToggle> = () => {
  const [serchParams] = useSearchParams();
  const tag = serchParams.get("tag");

  const globalFeedClasses = clsx("border-conduit-green bg-white py-2 px-4  ", {
    "text-black/30  hover:text-black/60 ": tag,
    "border-b-2 cursor-default": !tag,
  });

  return (
    <div className="h-8">
      <ul className="flex">
        <li>
          <NavLink to="/" className={globalFeedClasses}>
            Global Feed
          </NavLink>
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
