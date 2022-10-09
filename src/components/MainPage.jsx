import { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { YinYang } from "../icons";
import { HomeButton, Logo, SocialIcons } from "../subComponents";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const Works = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  left: calc(1rem + 2vw);
  top: 50%;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  transition: ${(props) =>
    props.click ? "color 0.2s ease 1.4s" : "color 0.2s ease 0.1s"};
`;
const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
  transition: ${(props) =>
    props.click ? "color 0.2s ease 1.2s" : "color 0.2s ease 0.3s"};
`;
const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const rotate = keyframes`
  from {
    transform:rotate(0)
  }
  to{
    transform: rotate(360deg);
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${(props) =>
    props.click ? "all 0.5s ease" : "top 0.5s ease 0.5s, left 0.5s ease 0.5s"};

  & > :first-child {
    animation: ${rotate} infinite 3s linear;
  }
  & > :last-child {
    padding-top: 1rem;
  }
`;
const DarkDiv = styled.div`
  position: absolute;
  background-color: #080808;
  top: 0;
  bottom: 0;
  right: 50%;
  height: ${(props) => (props.click ? "100%" : "0%")};
  width: ${(props) => (props.click ? "50%" : "1%")};
  z-index: 1;
  transition: ${(props) =>
    props.click
      ? "height 0.5s ease 0.5s,width 0.5s ease 1s"
      : "width 0.5s ease,height 0.5s ease 0.5s"};
`;

function MainPage() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <MainContainer>
      <Container>
        <HomeButton />
        <Logo click={click} />
        <SocialIcons click={click} />
        <DarkDiv click={click} />
        <Center click={click}>
          <YinYang
            onClick={handleClick}
            style={{
              transition: "height 0.5s ease , width 0.5s ease",
            }}
            height={click ? 120 : 200}
            width={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>
        <Contact
          target="_blank"
          href="mailto:thisismeajayprakash@gmail.com?subject=mail from portfolio"
        >
          Say Hi...
        </Contact>
        <Blog to="/blogs">
          <h2>Blogs</h2>
        </Blog>
        <Works to="/works" click={click}>
          <h2>Works</h2>
        </Works>
        <BottomBar>
          <About to="/works" click={click}>
            <h2>About Me.</h2>
          </About>
          <Skills to="/works">
            <h2>My Skills.</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
}

export default MainPage;
