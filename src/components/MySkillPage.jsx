// import Particles from "react-tsparticles";
import styled, { ThemeProvider } from "styled-components";
import { Design, Develope } from "../icons/AllSvg";
import { lightTheme } from "../Theme";
import { SocialIcons, HomeButton, Logo } from "../subComponents";
import ParticleComponent from "../subComponents/ParticleComponent";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 0 2rem 0;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 65vh;
  z-index: 3;
  line-height: 1.5;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    transition: all 0.2s ease;
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (max-width: 768px) {
    width: 50vw;
    &:nth-child(5) {
      margin-bottom: 2rem;
    }
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  margin-bottom: 20px;
  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  text-align: justify;
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
  }
  li {
    margin: 0 3rem 0 0;
  }
  strong {
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    ul,
    p {
      margin-left: 2rem;
    }
  }
`;

function MySkillPage() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Logo theme="light" />
        <SocialIcons theme="light" />
        <HomeButton side theme="light" />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Developer
          </Title>
          <Description>
            I&#39;m a full-stack developer. I love to develop front-end as well
            as back-end application which performs.
          </Description>
          <Description>
            <strong>My Skills</strong>
            <p>
              JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB, SQL, HTML, CSS,
              Redux Toolkit, BootStrap, Material UI etc.
            </p>
          </Description>
          <Description>
            <strong>Tools I use</strong>
            <ul>
              <li>VS Code</li>
              <li>Git</li>
              <li>Code Sanbox</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Design width={40} height={40} /> Designer
          </Title>
          <Description>
            Beauty of life begins when you bring creativity into work. Designing
            creative things is always fun. I love to design minimal yet stunning
            designs that speaks.
          </Description>
          <Description>
            <strong>I like to Design</strong>
            <ul>
              <li>Web Pages</li>
              <li>Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>Tools I use</strong>
            <ul>
              <li>Figma</li>
              <li>Canva</li>
            </ul>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
}

export default MySkillPage;
