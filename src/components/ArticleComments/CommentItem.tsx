import { FC } from "react";
import ArticleMeta from "../ArticleMeta/ArticleMeta";
import { Comment } from "../redux/dto/commentsIn";

interface ICommentItem {
  commentItem: Comment;
  slug: string;
  isFavorited: boolean;
}
const CommentItem: FC<ICommentItem> = ({ commentItem, slug, isFavorited }) => {
  return (
    <div className="border border-conduit-borderComment rounded ">
      <div className="p-5">
        <p>{commentItem.body}</p>
      </div>
      <div className="border-t border-conduit-borderComment bg-conduit-bgComment py-3 px-5">
        <ArticleMeta
          isFavorited={isFavorited}
          createdAt={commentItem.updatedAt}
          author={commentItem.author}
          authorNameStile="GREEN"
          showBtn={false}
          authorDirection="ROW"
          authorNameSize="SM"
          slug={slug}
        />
      </div>
    </div>
  );
};

export default CommentItem;
