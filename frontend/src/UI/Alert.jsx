import { Link } from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";

const Alert = (props) => {
  return (
    <Link to={props.path} className={props.className || ""}>
      <div className="p-3 bg-primary-color rounded-lg text-white">
        <div className="flex items-center gap-2">
          {props.icon && <FaCircleInfo className="text-2xl" />}
          <p className="text-lg font-semibold">{props.text}</p>
        </div>
      </div>
    </Link>
  );
};

export default Alert;
