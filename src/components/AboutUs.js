// hooks
import { Box, Divider, Typography } from "@mui/material";
import useTitle from "./hooks/UseTitle";

const AboutUs = () => {
  // title
  useTitle("React Quiz App - About");

  return (
    <Box textAlign="center" p={3} mt={'200px'}>
      <Box>
        <Typography variant="h5">
          Made with <span style={{ color: "#ff6767" }}>❤</span> by{" "}
          <a
            href="https://parham-ab.netlify.app/"
            target={"_blank"}
            rel="noreferrer"
            style={{ color: "#4ce0ff" }}
          >
            {" "}
            Parham Abolghasemi
          </a>
        </Typography>
      </Box>
      <Divider sx={{ background: "#fff", width: "40%", margin: "10px auto" }} />
      <Box>
        <Typography variant="body2">
          Copyright <sup>©</sup> Parham Abolghasemi 2022 All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
