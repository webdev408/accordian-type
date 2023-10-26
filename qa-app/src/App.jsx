import { useEffect, useState } from "react";
import Questions from "./components/Questions";
import data from "./data";
import "./index.css";

function App() {
  const [questions, setQuestions] = useState(data);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      title: "Why did the cat cross the road?",
      answer: "to get to the other side",
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <>
      <main className="wrapper">
        <Questions questions={questions} addQuestion={addQuestion} />
        <footer className="d-flex justify-content-center my-5">
          <p>Updated: {date.toLocaleDateString()}</p>
          <p className="ms-3">Current time: {date.toLocaleTimeString()}</p>
        </footer>
      </main>
    </>
  );
}

export default App;
