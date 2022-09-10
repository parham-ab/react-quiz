import {
  Button,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Stepper,
  StepLabel,
  Step,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { questionsList } from "../../db/questionsList";
import AnswerResults from "./AnswerResults";
import InfoIcon from "@mui/icons-material/Info";

const HomePage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  // checkAnswerHandle
  // console.log(questionsList.map((item) => item.answerOptions));
  const checkAnswerHandle = (isCorrect) => {
    // true answers
    const trueAnswers = questionsList.map((item) =>
      item.answerOptions.filter((item) => item.isCorrect === true)
    );
    // wrong answers
    const wrongAnswers = questionsList.map((item) =>
      item.answerOptions.filter((item) => item.isCorrect === isCorrect)
    );

    if (isCorrect === true) {
      setScore((prevScore) => prevScore + 1);
    }
    if (questionIndex + 1 < questionsList.length) {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowScore(true);
    }
  };
  // reset function
  const resetter = () => {
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
    <>
      <Card
        sx={{
          maxWidth: "600px",
          margin: "110px auto",
          backgroundColor: "#0000003b",
        }}
      >
        <Stepper
          activeStep={questionIndex}
          alternativeLabel
          style={{ paddingTop: "5px" }}
        >
          {questionsList.map((label, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        <Divider sx={{ backgroundColor: "#e8e8e8", mt: 1 }} />
        <CardContent>
          <Typography variant="h5" component="h1" sx={{ color: "#fff" }}>
            {questionsList[questionIndex].questionText}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
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
                  margin: "2px",
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
    </>
  );
};

export default HomePage;
