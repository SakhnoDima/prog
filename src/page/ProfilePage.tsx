import { FC } from "react";
import BannerProfile from "../components/ProfileModule/componentsProfile/BannerProfile";

interface ProfilePageProps {}

const ProfilePage: FC<ProfilePageProps> = () => {
  return (
    <div>
      <BannerProfile />
    </div>
  );
};

export default ProfilePage;
