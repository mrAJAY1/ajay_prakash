import "./App.css";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { BlogPage, MainPage, WorkPage } from "./components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./Theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/blogs" element={<BlogPage />} />
          <Route exact path="/works" element={<WorkPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
