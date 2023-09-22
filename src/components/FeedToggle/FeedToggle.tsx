import { FC } from "react";
import { NavLink } from "react-router-dom";

interface IFeedToggle {}

const FeedToggle: FC<IFeedToggle> = () => {
  return (
    <div className="h-8">
      <ul className="flex">
        <li>
          <NavLink
            to="/"
            className=" bg-white border-b-2 border-conduit-green py-2 px-4 "
          >
            Global Feed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FeedToggle;
