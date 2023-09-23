import { FC } from "react";

interface ITagListProps {
  list: string[];
}

const TagList: FC<ITagListProps> = ({ list }) => {
  return (
    <ul className="flex">
      {list.map((tag) => (
        <li
          key={tag}
          className="font-light text-date border border-conduit-lightGray text-conduit-tagLightGray mr-1 mb-0.2 px-0.6 rounded-tag"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
