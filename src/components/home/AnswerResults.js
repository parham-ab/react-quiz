import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DangerousIcon from "@mui/icons-material/Dangerous";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import { questionsList } from "../../db/questionsList";
import ReplayIcon from "@mui/icons-material/Replay";

import { useState } from "react";
import { Box } from "@mui/system";
import { Button, IconButton, Typography } from "@mui/material";

const AnswerResults = ({
  questionIndex,
  setQuestionIndex,
  showScore,
  setShowScore,
  score,
  setScore,
  resetter,
}) => {
  const [wrongs, setWrongs] = useState(true);
  const [trues, setTrues] = useState(true);

  const handleClick = () => {
    setWrongs(!wrongs);
  };
  const handleClick2 = () => {
    setTrues(!trues);
  };
  const trueAnswers = questionsList.map((item) =>
    item.answerOptions.filter((item) => item.isCorrect === true)
  );
  // console.log(trueAnswers.map((item) => item));

  return (
    <div>
      {questionsList.map((item, index) => (
        <div key={index}>
          <h1>{item.questionText}</h1>
          <div>
            {item.answerOptions.map((items, indexx) => (
              <div key={indexx}>
                {console.log(items.isCorrect)}
                <ul>
                  <li
                    className={items.isCorrect ? "trueAnswer" : "falseAnswer"}
                  >
                    {items.answerText}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    // <List
    //   sx={{
    //     width: "100%",
    //     maxWidth: 360,
    //     border: "solid 1px",
    //     borderRadius: "10px",
    //     background: "#2400eb0f",
    //     margin: "100px auto",
    //     overflow: "auto",
    //   }}
    //   component="nav"
    //   aria-labelledby="nested-list-subheader"
    //   subheader={
    //     <ListSubheader
    //       component="div"
    //       id="nested-list-subheader"
    //       style={{
    //         backgroundColor: "#5d687633",
    //         color: "#fff",
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //       }}
    //     >
    //       you answered {score} out of {questionsList.length}
    //       <IconButton
    //         color="info"
    //         aria-label="replay"
    //         component="label"
    //         onClick={resetter}
    //         size="small"
    //       >
    //         <ReplayIcon />
    //       </IconButton>
    //     </ListSubheader>
    //   }
    // >
    //   {questionsList.map((item, index) => (
    //     <div key={index}>
    //       <ListItemButton onClick={handleClick}>
    //         <ListItemIcon
    //           sx={{ color: "#fff", display: "felx", alignItems: "center" }}
    //           //  sx={{ color: "#df4a4a" }}
    //         >
    //           <DangerousIcon />
    //           <Typography variant="body2">{item.questionText}</Typography>
    //         </ListItemIcon>
    //         <ListItemText primary={item.answerText} fontWeight="normal" />
    //         {item ? <ExpandLess /> : <ExpandMore />}
    //       </ListItemButton>
    //       {console.log(item.answerOptions)}
    //     </div>
    //   ))}
    //   <Collapse in={wrongs} timeout="auto" unmountOnExit key={8}>
    //     {questionsList.map((item,index) => (
    //       <List component="div" disablePadding key={index}>
    //         <Box sx={{ pl: 4 }}>
    //           <ListItemText primary={item.answerText} />
    //         </Box>
    //       </List>
    //     ))}
    //   </Collapse>
    // </List>
  );
};
export default AnswerResults;
