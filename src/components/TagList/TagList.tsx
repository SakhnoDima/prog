import { FC } from "react";

interface ITagListProps {}

const TagList: FC<ITagListProps> = () => {
  return (
    <ul className="flex">
      <li className="font-light text-date border border-conduit-lightGray text-conduit-tagLightGray mr-1 mb-0.2 px-0.6 rounded-tag">
        qwe
      </li>
      <li className="font-light text-date border border-conduit-lightGray text-conduit-tagLightGray mr-1 mb-0.2 px-0.6 rounded-tag">
        qwe
      </li>
      <li className="font-light text-date border border-conduit-lightGray text-conduit-tagLightGray mr-1 mb-0.2 px-0.6 rounded-tag">
        qwe
      </li>
    </ul>
  );
};

export default TagList;
