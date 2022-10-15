// import Particles from "react-tsparticles";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { useEffect, useRef, useState } from "react";
import { CgScrollV } from "react-icons/cg";
import { motion } from "framer-motion";
import { darkTheme } from "../Theme";
import { SocialIcons, HomeButton, Logo } from "../subComponents";

import work from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "../icons/AllSvg";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  @media (max-width: 576px) {
    height: 690vh;
  }
  position: relative;
  display: flex;
  align-items: center;
`;
const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  @media (max-width: 768px) {
    left: calc(10rem + 10vw);
  }
  @media (max-width: 576px) {
    left: calc(1.5rem + 10vw);
  }
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;
const shake = keyframes`
0%{
  transform: translateY(0px);
}
5%{
  transform: translateY(-5px);
}
7%{
  transform: translateY(5px);
}
10%{
  transform: translateY(0px);
}
`;
const ScrollIcon = styled.div`
  position: fixed;
  left: 50%;
  bottom: 2rem;
  svg {
    color: ${(props) => props.theme.text};
    font-size: calc(1rem + 1vw);
  }
  animation: ${shake} 5s infinite ease;
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

function WorkPage() {
  const ref = useRef(null);
  const yinyang = useRef(null);
  const [scrollBack, setScrollBack] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [scrollBack]);

  useEffect(() => {
    const element = ref.current;
    const yanRef = yinyang.current;
    const rotate = () => {
      element.style.transform = `
        translateX(${-window.scrollY}px)
      `;
      yanRef.style.transform = `rotate(${window.scrollY}deg)`;
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton side theme="light" />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {work.map((d) => {
            return <Card key={d.id} data={d} />;
          })}
        </Main>
        <Rotate onClick={() => setScrollBack(!scrollBack)} ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
        <ScrollIcon>
          <CgScrollV />
        </ScrollIcon>
        <BigTitle text="work" top="4%" right="20%" />
      </Box>
    </ThemeProvider>
  );
}

export default WorkPage;
