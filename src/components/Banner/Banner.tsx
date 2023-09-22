import { FC } from "react";
import Container from "../Container/Container";

interface IBannerProps {}

const Banner: FC<IBannerProps> = () => {
  return (
    <div className="bg-conduit-green shadow-banner text-white p-8 mb-8 ">
      <Container>
        <h1 className="font-titillium drop-shadow-bannerText text-center text-logo pb-2">
          conduit
        </h1>
        <p className="text-center text-2xl font-light">
          A place to share your knowledge.
        </p>
      </Container>
    </div>
  );
};

export default Banner;
