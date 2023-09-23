import { FC } from "react";
import Banner from "../components/Banner/Banner";
import Feed from "../components/Feed/Feed";
import { useGetGlobalFeedQuery } from "../components/redux/api/repository";
import { useSearchParams } from "react-router-dom";

interface FeedPageProps {}

const FeedPage: FC<FeedPageProps> = () => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 0;
  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get("tag"),
  });

  return (
    <>
      <Banner />
      <Feed
        data={data}
        error={error}
        isFetching={isFetching}
        isLoading={isLoading}
      />
    </>
  );
};

export default FeedPage;
