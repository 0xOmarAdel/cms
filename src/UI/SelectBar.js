import "./SelectBar.css";

const SelectBar = (props) => {
  return (
    <div className="select-container">
      <select className="custom-select" onChange={props.onChange}>
        <option value="id">Id</option>
        <option value="title">Title</option>
        <option value="category">Category</option>
        <option value="user">User</option>
      </select>
    </div>
  );
};
export default SelectBar;
