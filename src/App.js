import { createTheme, ThemeProvider } from "@mui/material/styles";
// components
import LayOut from "./components/layout";

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
        <div></div>
      </LayOut>
    </ThemeProvider>
  );
};

export default App;
