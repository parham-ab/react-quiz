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

import { useState } from "react";
import { Box } from "@mui/system";

const AnswerResults = ({
  questionIndex,
  setQuestionIndex,
  showScore,
  setShowScore,
  score,
  setScore,
}) => {
  const [wrongs, setWrongs] = useState(true);
  const [trues, setTrues] = useState(true);

  const handleClick = () => {
    setWrongs(!wrongs);
  };
  const handleClick2 = () => {
    setTrues(!trues);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        border: "solid 1px",
        borderRadius: "10px",
        background: "#2400eb0f",
        margin: "100px auto",
        overflow: "auto",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Answer Results
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ color: "#df4a4a" }}>
          <DangerousIcon />
        </ListItemIcon>
        <ListItemText primary="Wrong Answers" fontWeight="normal" />
        {wrongs ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={wrongs} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </Box>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick2}>
        <ListItemIcon sx={{ color: "#5fa75f" }}>
          <CheckCircleIcon />
        </ListItemIcon>
        <ListItemText primary="True Answers" />
        {trues ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={trues} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Box sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </Box>
        </List>
      </Collapse>
    </List>
  );
};
export default AnswerResults;
