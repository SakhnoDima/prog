import { FC } from "react";
import Container from "../../Container/Container";
import ButtonProfile from "./ButtonProfile";
import { Profile } from "../../redux/dto/profile";
import { useAuth } from "../../hooks/useAuthe";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { routes } from "../../core/routes/Routes";

interface BannerProfileProps {
  profile: Profile;
}

const BannerProfile: FC<BannerProfileProps> = ({ profile }) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const goToSettings = () => {
    navigate(routes.settings.path);
  };
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
          {user?.username !== profile.username ? (
            <ButtonProfile user={profile.username} />
          ) : (
            <Button onClick={goToSettings}>
              <i className="mr-1 ion-gear-a"></i>
              Edit Prfile Settings
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default BannerProfile;
