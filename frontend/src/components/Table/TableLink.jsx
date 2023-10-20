import { Link } from "react-router-dom";

const TableLink = (props) => {
  return props.linkTo ? (
    <Link to={props.linkTo}>{props.children}</Link>
  ) : (
    props.children
  );
};

export default TableLink;
