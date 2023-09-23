import { FC } from "react";
import TagList from "../TagList/TagList";
import { useGetPopularTagQuery } from "../redux/api/repository";

interface TagCloudProps {}

const TagCloud: FC<TagCloudProps> = () => {
  const { error, isLoading, isFetching, data } = useGetPopularTagQuery("");
  if (isLoading || isFetching) {
    return (
      <div className="bg-conduit-tagCloud p-3 pt-1.5 ">
        <p className="mb-2">Loading Popular Tags ...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="bg-conduit-tagCloud p-3 pt-1.5 ">
        <p className="mb-2">Error While Loading Popular Tags ...</p>
      </div>
    );
  }

  return (
    <div className="bg-conduit-tagCloud p-3 pt-1.5 ">
      <p className="mb-2">Popular Tags</p>
      <TagList list={data!.tags} itemStyle="DARK" itemAs="a" />
    </div>
  );
};

export default TagCloud;
