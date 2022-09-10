import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
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
    );
  }

  return (
    <Card
      sx={{
        maxWidth: "600px",
        margin: "110px auto",
        backgroundColor: "#0000003b",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14, color: "#fff" }}
          color="text.secondary"
          gutterBottom
        >
          {`${questionIndex + 1} / ${questionsList.length}`}
        </Typography>
        <Typography variant="h5" component="h1" sx={{ color: "#fff" }}>
          {questionsList[questionIndex].questionText}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        {questionsList[questionIndex].answerOptions.map((item, index) => (
          <Box key={index}>
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
          </Box>
        ))}
      </CardActions>
    </Card>
  );
};

export default HomePage;
