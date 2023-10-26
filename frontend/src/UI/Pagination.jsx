import PaginationLink from "./PaginationLink";

import "./Pagination.css";

const Pagination = ({ pages, pagesNumber, currentPage, path }) => {
  const currentPageIndex = pages.indexOf(currentPage);
  const max = 2;
  const start = currentPageIndex - max < 0 ? 0 : currentPageIndex - max;
  const end =
    currentPageIndex + max > pages.length
      ? pages.length
      : currentPageIndex + max;
  const modifiedPages = pages.slice(start, end + 1);
  return (
    <div className="pagination">
      <ul className={"flex justify-center"}>
        {currentPage !== 1 && (
          <PaginationLink page="«" to={`${path}${currentPage - 1}`} />
        )}

        {modifiedPages.map((page) => (
          <PaginationLink
            key={page}
            page={page}
            className={currentPage === page ? "active" : ""}
            to={`${path}${page}`}
          />
        ))}

        {currentPage !== pagesNumber && (
          <PaginationLink page="»" to={`${path}${currentPage + 1}`} />
        )}
      </ul>
      <p className="mt-2">
        Page {currentPage} out of {pagesNumber}
      </p>
    </div>
  );
};

export default Pagination;
