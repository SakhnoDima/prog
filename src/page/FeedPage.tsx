import { FC } from "react";
import Banner from "../components/Banner/Banner";
import Feed from "../components/Feed/Feed";

interface FeedPageProps {}

const FeedPage: FC<FeedPageProps> = () => {
  return (
    <>
      <Banner />
      <Feed />
    </>
  );
};

export default FeedPage;
