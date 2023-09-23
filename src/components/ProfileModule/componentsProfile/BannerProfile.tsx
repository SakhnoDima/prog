import { FC } from "react";
import Container from "../../Container/Container";
import ButtonProfile from "./ButtonProfile";

interface BannerProfileProps {}

const BannerProfile: FC<BannerProfileProps> = () => {
  return (
    <div className="bg-conduit-tagCloud pt-8 pb-4">
      <Container>
        <div>
          <img
            className="w-25 h-25 rounded-full mx-auto mb-4"
            src="https://api.realworld.io/images/demo-avatar.png"
            alt="username"
          />
          <h2 className="text-center font-bolt text-2xl">Magda</h2>
        </div>
        <div className="flex justify-end ">
          <ButtonProfile />
        </div>
      </Container>
    </div>
  );
};

export default BannerProfile;
