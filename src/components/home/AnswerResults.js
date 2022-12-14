// DB
import { questionsList } from "../../db/questionsList";
// icons
import ReplayIcon from "@mui/icons-material/Replay";
// mui components
import { Box } from "@mui/system";
import {
  IconButton,
  Typography,
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import UseTitle from "../hooks/UseTitle";

const AnswerResults = ({ score, resetter }) => {
  // title
  UseTitle("Results");

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 340,
        border: "solid 1px",
        borderRadius: "10px",
        background: "#2400eb0f",
        margin: "100px auto",
        overflow: "auto",
      }}
      component="nav"
      aria-labelledby="questions"
      subheader={
        <ListSubheader
          component="div"
          id="answerLists"
          style={{
            backgroundColor: "#5d687633",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          you answered {score} out of {questionsList.length}
          <IconButton
            color="info"
            aria-label="replay"
            component="label"
            onClick={resetter}
            size="small"
          >
            <ReplayIcon />
          </IconButton>
        </ListSubheader>
      }
    >
      {questionsList.map((item, index) => (
        <div key={index}>
          <ListItemButton>
            <ListItemIcon
              sx={{ color: "#fff", display: "flex", alignItems: "center" }}
            >
              <Typography variant="body2" noWrap sx={{ fontSize: "14px" }}>
                {item.questionText}
              </Typography>
            </ListItemIcon>
            <ListItemText primary={item.answerText} fontWeight="normal" />
          </ListItemButton>
          {item.answerOptions.map((answers, answerIndex) => (
            <List component="div" disablePadding key={answerIndex}>
              <Box sx={{ pl: 5 }}>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "15px" }}
                  className={answers.isCorrect ? "trueAnswer" : "falseAnswer"}
                >
                  {answers.answerText}
                </Typography>
              </Box>
            </List>
          ))}
        </div>
      ))}
    </List>
  );
};
export default AnswerResults;