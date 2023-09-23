import { FC } from "react";
import Container from "../Container/Container";
import ArticleList from "../ArticleList/ArticleList";
import FeedToggle from "../FeedToggle/FeedToggle";
import { useGetGlobalFeedQuery } from "../redux/api/repository";

interface IFeed {}

const Feed: FC<IFeed> = () => {
  const { data, error, isLoading } = useGetGlobalFeedQuery("");
  if (isLoading) {
    return <Container>Feed loading... </Container>;
  }
  if (error) {
    return <Container> Error While Loading Feed </Container>;
  }
  console.log(data);

  return (
    <Container>
      <FeedToggle />
      <div className=" flex">
        <ArticleList list={data?.articles || []} />
        <div className="w-1/4">TAGS</div>
      </div>
    </Container>
  );
};

export default Feed;
