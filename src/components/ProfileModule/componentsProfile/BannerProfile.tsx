import { FC } from "react";
import Container from "../../Container/Container";
import ButtonProfile from "./ButtonProfile";
import { Profile } from "../../redux/dto/profile";

interface BannerProfileProps {
  profile: Profile;
}

const BannerProfile: FC<BannerProfileProps> = ({ profile }) => {
  return (
    <div className="bg-conduit-tagCloud pt-8 pb-4 mb-8">
      <Container>
        <div>
          <img
            className="w-25 h-25 rounded-full mx-auto mb-4"
            src={profile?.image}
            alt={profile?.username}
          />
          <h2 className="text-center font-bolt text-2xl">
            {profile?.username}
          </h2>
        </div>
        <div className="flex justify-end ">
          <ButtonProfile user={profile.username} />
        </div>
      </Container>
    </div>
  );
};

export default BannerProfile;
