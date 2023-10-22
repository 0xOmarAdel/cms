import { Link } from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";

const Alert = (props) => {
  return (
    <Link to={props.path} className={props.className || ""}>
      <div className="bg-primary-color text-white p-3 rounded-lg font-bold text-lg">
        <div className="flex items-center gap-2">
          {props.icon && <FaCircleInfo />}
          <p>{props.text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Alert;
