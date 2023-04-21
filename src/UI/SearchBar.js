import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Search..." className="search-input" />
      <div className="search-icon-container">
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};
export default SearchBar;
