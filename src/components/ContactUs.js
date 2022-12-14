// components
import useTitle from "./hooks/UseTitle";
// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import LanguageIcon from "@mui/icons-material/Language";
// mui components
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const ContactUs = () => {
  // title
  useTitle("React Quiz App - Contact");

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "200px auto" }}
        >
          <Typography variant="body1">
            I hope you enjoyed the site. I have prepared a box for you that you
            can contact me. I'll be happy if you send me your suggestions,
            comments, criticisms & job offers .
          </Typography>
          <ul className="wrapper">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href="https://github.com/parham-ab"
            >
              <li className="icon github">
                <span className="tooltip">Github</span>
                <span>
                  <GitHubIcon />
                </span>
              </li>
            </a>
            {/* linkedin */}
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href="https://www.linkedin.com/in/parham-abolghasemi/"
            >
              <li className="icon linkedin">
                <span className="tooltip">Linkedin</span>
                <span>
                  <LinkedInIcon />
                </span>
              </li>
            </a>
            {/* email */}
            <a rel="noopener noreferrer" href="mailto:parhamab17@gmail.com">
              <li className="icon email">
                <span className="tooltip">Email</span>
                <span>
                  <MailIcon />
                </span>
              </li>
            </a>
            {/* website */}
            <a
              rel="noopener noreferrer"
              target={"_blank"}
              href="https://parham-ab.netlify.app/"
            >
              <li className="icon website">
                <span className="tooltip">Website</span>
                <span>
                  <LanguageIcon />
                </span>
              </li>
            </a>
          </ul>
        </Box>
      </Grid>
    </Container>
  );
};

export default ContactUs;
