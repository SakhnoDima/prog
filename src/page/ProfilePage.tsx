import { FC } from "react";
import BannerProfile from "../components/ProfileModule/componentsProfile/BannerProfile";
import Feed from "../components/Feed/Feed";
import { usePageParams } from "../components/hooks/usePageParams";
import { useGetProfileFeedQuery } from "../components/redux/api/repository";
import { useLocation, useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import FeedToggle from "../components/FeedToggle/FeedToggle";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
  const { page } = usePageParams();
  const { profile } = useParams();
  const { pathname } = useLocation();

  const { data, error, isLoading, isFetching } = useGetProfileFeedQuery({
    page,
    author: profile!,
    isFavorite: pathname.includes(`/${encodeURIComponent(profile!)}/favorites`),
  });

  const feedToggleItems = [
    {
      text: "Favorited articles",
      link: `/${encodeURIComponent(profile!)}/favorites`,
    },
  ];

  return (
    <div>
      <BannerProfile />
      <Container>
        <FeedToggle
          defaultText="My Articles"
          defaultLink={`/${profile}`}
          items={feedToggleItems}
        />
        <Feed
          data={data}
          error={error}
          isFetching={isFetching}
          isLoading={isLoading}
        />
      </Container>
    </div>
  );
};

export default ProfilePage;
