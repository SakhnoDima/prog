import { FC } from "react";
import ArticleBanner from "../components/ArticleBanner/ArticleBanner";
import Container from "../components/Container/Container";
import TagList from "../components/TagList/TagList";
import ArticleMeta from "../components/ArticleMeta/ArticleMeta";
import { useGetSingleArticleQuery } from "../components/redux/api/feedAPI";
import { useParams } from "react-router-dom";
import CommentsList from "../components/ArticleComments/CommentsList";

interface IArticlePage {}

const ArticlePage: FC<IArticlePage> = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleArticleQuery({ slug: slug! });

  if (isLoading) {
    return null;
  }

  if (!data) {
    return <h1>Article not found</h1>;
  }

  return (
    <>
      <ArticleBanner
        isFavorited={data.article.favorited}
        data={data.article}
        slug={slug!}
      />
      <Container>
        <div className="pb-8 border-b mb-6">
          <p className="text-articleText leading-articleText mb-8">
            {data.article.body}
          </p>
          <TagList list={data.article.tagList} />
        </div>
        <div className="flex justify-center">
          <ArticleMeta
            isFavorited={data.article.favorited}
            likes={data.article.favoritesCount}
            createdAt={data.article.updatedAt}
            author={data.article.author}
            authorNameStile="GREEN"
            slug={slug!}
          />
        </div>
        <CommentsList />
      </Container>
    </>
  );
};

export default ArticlePage;
