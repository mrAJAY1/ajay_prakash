import "./App.css";
import { ThemeProvider } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AboutPage, MainPage, MySkillPage, WorkPage } from "./components";
import GlobalStyle from "./globalStyles";
import { lightTheme } from "./Theme";
import SoundBar from "./subComponents/SoundBar";
import ContactPage from "./components/ContactPage";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        {location.pathname === "/" ? <SoundBar home /> : <SoundBar />}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route exact path="/ajay_prakash" element={<MainPage />} />
            <Route exact path="/contact" element={<ContactPage />} />
            <Route exact path="/works" element={<WorkPage />} />
            <Route exact path="/skills" element={<MySkillPage />} />
            <Route exact path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
