/* eslint-disable react/prop-types */
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, answer, addQuestion }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="container">
      <h5 className="text">{title}</h5>
      <button type="button" onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      {showInfo && <p className="text-primary">{answer}</p>}
      <button onClick={() => addQuestion(title.id)}>Add</button>
    </article>
  );
};
export default Question;
