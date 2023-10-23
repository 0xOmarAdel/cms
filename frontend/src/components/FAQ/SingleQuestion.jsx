import { FaPlus } from "react-icons/fa6";

const SingleQuestion = ({ id, title, answer, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <article
      className="question px-6 py-5 flex flex-col gap-3 shadow-md cursor-pointer"
      onClick={() => toggleQuestion(id)}
    >
      <header className="flex flex-row justify-between">
        <h5 className="text-lg text-gray-600 font-semibold">{title}</h5>
        <FaPlus
          className={`text-xl text-sky-500 cursor-pointer transition duration-300 ${
            isActive && "rotate-45"
          }`}
        />
      </header>
      <p
        className={`text-gray-600 overflow-hidden transition-all duration-300 ${
          isActive ? "h-[100px]" : "h-0"
        }`}
      >
        {answer}
      </p>
    </article>
  );
};
export default SingleQuestion;
