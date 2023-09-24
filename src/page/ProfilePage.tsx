import { FC } from "react";
import BannerProfile from "../components/ProfileModule/componentsProfile/BannerProfile";
import Feed from "../components/Feed/Feed";
import { usePageParams } from "../components/hooks/usePageParams";
import { useGetProfileFeedQuery } from "../components/redux/api/feedAPI";
import { useLocation, useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import FeedToggle from "../components/FeedToggle/FeedToggle";
import { useGetProfileQuery } from "../components/redux/api/profileAPI";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
  const { page } = usePageParams();
  const { profile } = useParams();
  const { pathname } = useLocation();

  const { data: profileInfo, isLoading: profileIsLoading } = useGetProfileQuery(
    { userName: profile! }
  );

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
  if (profileIsLoading) {
    return null;
  }

  return (
    <div>
      <BannerProfile profile={profileInfo!.profile} />
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
