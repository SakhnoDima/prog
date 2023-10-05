import { FC } from "react";
import Container from "../Container/Container";
import ArticleMeta from "../ArticleMeta/ArticleMeta";
import { Article } from "../redux/dto/singleArticle";

interface IArticleBanner {
  data: Article;
  slug: string;
  isFavorited: boolean;
}

const ArticleBanner: FC<IArticleBanner> = ({ data, slug, isFavorited }) => {
  return (
    <div className="bg-conduit-darkGray shadow-banner p-8 mb-8 ">
      <Container>
        <h1 className=" text-white text-articleBanner font-semibold leading-articleBanner mb-8">
          {data.title}
        </h1>
        <ArticleMeta
          isFavorited={isFavorited}
          slug={slug}
          likes={data.favoritesCount}
          author={data.author}
          createdAt={data.updatedAt}
        />
      </Container>
    </div>
  );
};

export default ArticleBanner;
