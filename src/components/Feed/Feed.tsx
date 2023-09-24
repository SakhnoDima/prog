import { FC } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { FeedData } from "../redux/api/feedAPI";
import ReactPaginate from "react-paginate";
import { FEED_PAGE_SIZE } from "../const/const";
import { usePageParams } from "../hooks/usePageParams";

interface IFeed {
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  data?: FeedData;
}

const Feed: FC<IFeed> = ({ isFetching, isLoading, error, data }) => {
  const { page, setPage } = usePageParams();
  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
  };

  if (isLoading || isFetching) {
    return <p className="mt-6">Feed loading... </p>;
  }
  if (error) {
    return <p className="mt-6"> Error While Loading Feed </p>;
  }
  if (data?.articlesCount === 0) {
    return (
      <div className="py-6">
        <p>No articles are here... yet.</p>
      </div>
    );
  }
  return (
    <>
      <ArticleList list={data?.articles || []} />
      <nav className="my-6">
        <ReactPaginate
          pageCount={Math.ceil((data?.articlesCount || 0) / FEED_PAGE_SIZE)}
          pageRangeDisplayed={Math.ceil(
            (data?.articlesCount || 0) / FEED_PAGE_SIZE
          )}
          previousLabel={null}
          nextLabel={null}
          containerClassName="flex"
          pageClassName="group"
          pageLinkClassName="p-3 text-conduit-green bg-white border border-conduit-lightGray -ml-px
        group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-conduit-pageHoverBg hover:underline "
          activeClassName="group is-active"
          activeLinkClassName="group-[.is-active]:bg-conduit-green group-[.is-active]:text-white group-[.is-active]:border-conduit-green"
          onPageChange={handlePageChange}
          forcePage={page}
        />
      </nav>
    </>
  );
};

export default Feed;
