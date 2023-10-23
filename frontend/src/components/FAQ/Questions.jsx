import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <div className="order-2 lg:order-1 flex flex-col gap-8">
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </div>
  );
};
export default Questions;
