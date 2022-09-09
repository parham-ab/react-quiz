import { useState } from "react";
import { questionsList } from "../../db/questionsList";

const HomePage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  console.log(questionsList[0].answerOptions);
  // checkAnswerHandle
  const checkAnswerHandle = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prevScore) => prevScore + 1);
    }

    if (questionIndex + 1 < questionsList.length) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      console.log(score);
    } else {
      setShowScore(true);
    }
  };
  // resetter
  const resetter = () => {
    console.log("reset");
    setShowScore(false);
    setQuestionIndex(0);
    setScore(0);
  };

  if (showScore) {
    return (
      <div>
        <p>
          you answered {score} out of {questionsList.length}
        </p>
        <div>
          <button onClick={resetter}>Reset</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>{questionsList[questionIndex].questionText}</h1>
      <div>
        {questionsList[questionIndex].answerOptions.map((item, index) => (
          <div key={index}>
            <button onClick={() => checkAnswerHandle(item.isCorrect)}>
              {item.answerText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
