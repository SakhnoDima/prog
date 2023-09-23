import { FC, useState } from "react";
import Container from "../Container/Container";
import ArticleList from "../ArticleList/ArticleList";
import FeedToggle from "../FeedToggle/FeedToggle";
import { useGetGlobalFeedQuery } from "../redux/api/repository";
import ReactPaginate from "react-paginate";
import { FEED_PAGE_SIZE } from "../const/const";
import { useSearchParams } from "react-router-dom";
import { serializeSearchParams } from "../utils/router";

interface IFeed {}

const Feed: FC<IFeed> = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState<number>(
    searchParams.get("page") ? Number(searchParams.get("page")) : 1
  );
  const handlePageChange = ({ selected }: { selected: number }) => {
    console.log(selected);

    setPage(selected);
    setSearchParams(serializeSearchParams({ page: String(selected) }));
  };

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
  });

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
        <div className="w-1/4">TAGS</div>
      </div>
    </Container>
  );
};

export default Feed;
