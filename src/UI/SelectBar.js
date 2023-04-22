import "./SelectBar.css";

const SelectBar = (props) => {
  return (
    <div className="select-container">
      <select className="custom-select" onChange={(e) => props.onChange(e)}>
        <option value="id">Id</option>
        <option value="title">Title</option>
        <option value="categoryName">Category</option>
        <option value="userName">User</option>
        <option value="date_created">Date Created</option>
        <option value="last_modified">Last Modified</option>
      </select>
    </div>
  );
};
export default SelectBar;
