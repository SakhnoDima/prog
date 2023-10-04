import { FC } from "react";
import Banner from "../components/Banner/Banner";
import Feed from "../components/Feed/Feed";
import { useGetGlobalFeedQuery } from "../components/redux/api/feedAPI";
import { useMatch, useSearchParams } from "react-router-dom";
import { usePageParams } from "../components/hooks/usePageParams";
import FeedToggle from "../components/FeedToggle/FeedToggle";
import Container from "../components/Container/Container";
import TagCloud from "../components/TagCloud/TagCloud";
import { useAuth } from "../components/hooks/useAuthe";
import { routes } from "../components/core/routes/Routes";

interface FeedPageProps {}

const FeedPage: FC<FeedPageProps> = () => {
  const personalFeed = useMatch(routes.personalFeed);
  const { isLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();
  const { page } = usePageParams();
  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
    tag: searchParams.get("tag"),
    isPersonalFeed: personalFeed !== null,
  });

  const feetTogleItem = [];
  if (isLoggedIn) {
    feetTogleItem.push({
      text: "Your feed",
      link: "/personal-feed",
    });
  }
  return (
    <>
      {!isLoggedIn && <Banner />}

      <Container>
        <FeedToggle items={feetTogleItem} />
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
