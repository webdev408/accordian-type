import Question from "./Question";

/* eslint-disable react/prop-types */
const Questions = ({ questions, addQuestion }) => {
  return (
    <section>
      <h2 className="my-4 text-center">Question Bank</h2>

      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            className="question"
            {...question}
            addQuestion={addQuestion}
          ></Question>
        );
      })}
    </section>
  );
};
export default Questions;
