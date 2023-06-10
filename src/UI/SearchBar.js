import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="search-container">
      <input 
        type="text" 
        id="search" 
        placeholder="Search..." 
        className={props.className ? 'search-input ' + props.className : 'search-input'}
        onChange={(e) => props.onChange(e)}
      />
      <div className="search-icon-container">
        <FaSearch className="search-icon" />
      </div>
    </div>
  );
};
export default SearchBar;
