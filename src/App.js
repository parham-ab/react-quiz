// react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
// mui
import { createTheme, ThemeProvider } from "@mui/material/styles";
// components
import LayOut from "./components/layout";
import HomePage from "./components/home/index";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 15,
      fontWeightLight: 400,
      fontWeightMedium: 500,
      fontWeightRegular: 600,
      fontWeightBold: 700,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LayOut>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </LayOut>
    </ThemeProvider>
  );
};

export default App;
