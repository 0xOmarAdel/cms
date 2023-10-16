import React, { useEffect } from "react";
import Pagination from "./Pagination";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const PaginationHandler = ({ currentPage, dataLength, elementsPerPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pagesNumber =
    Math.ceil(dataLength / elementsPerPage) === 0
      ? 1
      : Math.ceil(dataLength / elementsPerPage);

  // Note: Index 0 represents the value 1
  const pages = Array.from({ length: pagesNumber }, (_, index) => {
    return index + 1;
  });

  const location = useLocation();

  let path = location.pathname.split("/");
  path.pop();
  path = path.join("/") + "/";

  const navigate = useNavigate();

  useEffect(() => {
    const searchValue = searchParams.get("search");

    if (currentPage === undefined) {
      if (location.pathname.charAt(location.pathname.length - 1) !== "/") {
        navigate(location.pathname + "/1");
        navigate({
          pathname: location.pathname + "/1",
          search: searchValue ? `search=${searchValue}` : "",
        });
      } else {
        navigate({
          pathname: path + "1",
          search: searchValue ? `search=${searchValue}` : "",
        });
      }
    } else if (isNaN(currentPage) || !pages.includes(parseInt(currentPage))) {
      navigate({
        pathname: path + "1",
        search: searchValue ? `search=${searchValue}` : "",
      });
    }
  });

  return (
    <>
      {pagesNumber > 1 ? (
        <Pagination
          pages={pages}
          pagesNumber={pagesNumber}
          currentPage={parseInt(currentPage)}
          path={path}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default PaginationHandler;
