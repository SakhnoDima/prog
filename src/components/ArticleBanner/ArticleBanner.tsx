import { FC } from "react";
import Container from "../Container/Container";
import ArticleMeta from "../ArticleMeta/ArticleMeta";

interface IArticleBanner {}

const ArticleBanner: FC<IArticleBanner> = () => {
  return (
    <div className="bg-conduit-darkGray shadow-banner p-8 mb-8 ">
      <Container>
        <h1 className=" text-white text-articleBanner font-semibold leading-articleBanner mb-8">
          text
        </h1>
        <ArticleMeta />
      </Container>
    </div>
  );
};

export default ArticleBanner;
