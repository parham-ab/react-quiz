// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
// mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
// components
import LayOut from "./components/layout";
import HomePage from "./components/home/index";
import AnswerResults from "./components/home/AnswerResults";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 15,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LayOut>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AnswerResults" element={<AnswerResults />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </LayOut>
    </ThemeProvider>
  );
};

export default App;