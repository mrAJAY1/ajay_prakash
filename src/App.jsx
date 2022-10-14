import "./App.css";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  BlogPage,
  MainPage,
  MySkillPage,
  WorkPage,
} from "./components";
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
          <Route exact path="/skills" element={<MySkillPage />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
