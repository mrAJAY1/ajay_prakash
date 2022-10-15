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
            <Route path="/ajay_prakash/contact" element={<ContactPage />} />
            <Route path="/ajay_prakash/works" element={<WorkPage />} />
            <Route path="/ajay_prakash/skills" element={<MySkillPage />} />
            <Route path="/ajay_prakash/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
