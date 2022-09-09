import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { questionsList } from "../../db/questionsList";
import AnswerResults from "./AnswerResults";

const HomePage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // checkAnswerHandle
  const checkAnswerHandle = (isCorrect) => {
    if (isCorrect === true) {
      setScore((prevScore) => prevScore + 1);
    }

    if (questionIndex + 1 < questionsList.length) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
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
      <AnswerResults
        questionIndex={questionIndex}
        setQuestionIndex={setQuestionIndex}
        showScore={showScore}
        setShowScore={setShowScore}
        score={score}
        setScore={setScore}
        resetter={resetter}
        questionsList={questionsList}
      />
      // <div>
      //   <p>
      //     you answered {score} out of {questionsList.length}
      //   </p>
      //   <div>
      //     <Button onClick={resetter} variant="text" color="error" size="small">
      //       Reset
      //     </Button>
      //   </div>
      // </div>
    );
  }

  return (
    <div>
      <Typography fontWeight="normal" variant="h5" component="h1">
        {questionsList[questionIndex].questionText}
      </Typography>
      <div>
        {questionsList[questionIndex].answerOptions.map((item, index) => (
          <div key={index}>
            <Button
              onClick={() => checkAnswerHandle(item.isCorrect)}
              variant="outlined"
              sx={{
                width: "200px",
                display: "flex",
                justifyContent: "flex-start",
                color: "#fff",
                margin: "5px",
                borderColor: "#ffed00",
                "&:hover": {
                  borderColor: "#fff",
                },
              }}
            >
              {item.answerText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
