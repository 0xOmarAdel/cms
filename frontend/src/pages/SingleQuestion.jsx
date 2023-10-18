import { FaPlus, FaXmark } from "react-icons/fa6";
import "./Questions.css";

const SingleQuestion = ({ id, title, answer, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <article
      className="question shadow my-3"
      onClick={() => toggleQuestion(id)}
    >
      <header className="d-flex justify-content-between align-items-center">
        <h5>{title}</h5>
        <button className="question-btn">
          {isActive ? (
            <FaXmark />
          ) : (
            <FaPlus />
          )}
        </button>
      </header>
      {<p style={{ height: isActive ? "100px" : "0px" }}>{answer}</p>}
    </article>
  );
};
export default SingleQuestion;
