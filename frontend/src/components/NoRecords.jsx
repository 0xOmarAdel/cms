import React from "react";
import SearchBar from "../UI/SearchBar";

const NoRecords = ({ title, search, inputValue, searchHandler }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="mb-4">{title}</h1>
        {search ? (
          <div className="mb-3">
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-xs-12 ps-0 pd">
                <SearchBar
                  value={inputValue}
                  onChange={(e) => searchHandler(e.target.value)}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <p className="error-message">Found 0 records.</p>
      </div>
    </div>
  );
};

export default NoRecords;
