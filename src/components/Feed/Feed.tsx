import { FC } from "react";
import Container from "../Container/Container";
import ArticleList from "../ArticleList/ArticleList";
import FeedToggle from "../FeedToggle/FeedToggle";

interface IFeed {}

const Feed: FC<IFeed> = () => {
  return (
    <Container>
      <FeedToggle />
      <div className=" flex">
        <ArticleList />
        <div className="w-1/4">TAGS</div>
      </div>
    </Container>
  );
};

export default Feed;
