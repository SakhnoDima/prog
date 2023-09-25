import { FC } from "react";

import CommentItem from "./CommentItem";
import { Link, useParams } from "react-router-dom";
import { useGetCommentsArticleQuery } from "../redux/api/feedAPI";

interface ICommentsList {}

const CommentsList: FC<ICommentsList> = () => {
  const { slug } = useParams();
  const { data, isLoading } = useGetCommentsArticleQuery({ slug: slug! });
  if (isLoading) {
    return <p>Comments is loading...</p>;
  }

  if (!data?.comments) {
    return (
      <div className="max-w-3xl mx-auto mt-16 flex flex-col gap-3">
        <p>
          <Link to="/sign-in"> Sign in</Link> or
          <Link to="/sign-up"> sign up</Link>
          to add comments on this article.
        </p>
        <p>Comments not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-16 flex flex-col gap-3">
      <p>
        <Link to="/sign-in"> Sign in</Link> or
        <Link to="/sign-up"> sign up</Link>
        to add comments on this article.
      </p>
      {data?.comments.map((comment) => (
        <CommentItem key={comment.id} commentItem={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
