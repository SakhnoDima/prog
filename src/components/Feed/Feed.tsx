import { FC } from "react";
import Container from "../Container/Container";
import ArticleList from "../ArticleList/ArticleList";
import FeedToggle from "../FeedToggle/FeedToggle";
import { FeedData } from "../redux/api/repository";
import ReactPaginate from "react-paginate";
import { FEED_PAGE_SIZE } from "../const/const";
import { useSearchParams } from "react-router-dom";
import { serializeSearchParams } from "../utils/router";
import TagCloud from "../TagCloud/TagCloud";

interface IFeed {
  isLoading: boolean;
  isFetching: boolean;
  error: any;
  data?: FeedData;
}

const Feed: FC<IFeed> = ({ isFetching, isLoading, error, data }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ? Number(searchParams.get("page")) : 0;
  const handlePageChange = ({ selected }: { selected: number }) => {
    setSearchParams(serializeSearchParams({ page: String(selected) }));
  };

  if (isLoading || isFetching) {
    return <Container>Feed loading... </Container>;
  }
  if (error) {
    return <Container> Error While Loading Feed </Container>;
  }

  return (
    <Container>
      <FeedToggle />
      <div className="flex">
        <div className="w-3/4">
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
        </div>
        <div className="w-1/4 pl-3">
          <TagCloud />
        </div>
      </div>
    </Container>
  );
};

export default Feed;
