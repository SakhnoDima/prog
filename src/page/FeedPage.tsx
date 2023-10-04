import { FC } from "react";
import Banner from "../components/Banner/Banner";
import Feed from "../components/Feed/Feed";
import { useGetGlobalFeedQuery } from "../components/redux/api/feedAPI";
import { useSearchParams } from "react-router-dom";
import { usePageParams } from "../components/hooks/usePageParams";
import FeedToggle from "../components/FeedToggle/FeedToggle";
import Container from "../components/Container/Container";
import TagCloud from "../components/TagCloud/TagCloud";
import { useAuth } from "../components/hooks/useAuthe";

interface FeedPageProps {}

const FeedPage: FC<FeedPageProps> = () => {
  const [searchParams] = useSearchParams();
  const { page } = usePageParams();
  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get("tag"),
  });
  const { isLoggedIn } = useAuth();
  return (
    <>
      {!isLoggedIn && <Banner />}

      <Container>
        <FeedToggle />
        <div className="flex">
          <div className="w-3/4">
            <Feed
              data={data}
              error={error}
              isFetching={isFetching}
              isLoading={isLoading}
            />
          </div>
          <div className="w-1/4 pl-3">
            <TagCloud />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FeedPage;
