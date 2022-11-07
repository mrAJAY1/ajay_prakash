// import Particles from "react-tsparticles";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "../Theme";
import { SocialIcons, HomeButton, Logo } from "../subComponents";
import ParticleComponent from "../subComponents/ParticleComponent";
import me from "../assets/Images/me-flying.webp";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
   0%{ transform: translateY(-25px)}
   50%{
    transform: translateY(25px) translateX(-30px) rotate(3deg);
   }
  100%{
    transform: translateY(-25px)}
`;
const floatSmall = keyframes`
   0%{ transform: translateY(-5px)}
   50%{
    transform: translateY(5px) translateX(-10px) rotate(3deg);
   }
  100%{
    transform: translateY(-5px)}
`;
const Person = styled.div`
  position: absolute;
  top: 10%;
  right: 15%;
  width: 20vw;
  img {
    width: 150%;
    height: auto;
    animation: ${float} 10s infinite linear;
    @media (max-width: 768px) {
      top: 5%;
      animation: ${floatSmall} 8s infinite linear;
    }
  }
  @media (max-width: 768px) {
    right: 8%;
    top: 9%;
  }
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(3px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;
function AboutPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton side theme="light" />
        <ParticleComponent theme="dark" />
        <Person>
          <img src={me} alt="robo" />
        </Person>
        <Main>
          I&#39;m a self-taught web developer with a focus on the MERN stack,
          <br />
          but still exploring other technologies and frameworks that catch my
          interest!
          <br /> <br />I love to develop simple and beautiful websites, which
          follows creativity and perfomance. <br />
          <br /> if you&#39;re looking for a developer to add to your team,
          I&#39;d love to hear from you!
        </Main>
        <BigTitle text="About Me" top="5%" right="18%" />
      </Box>
    </ThemeProvider>
  );
}

export default AboutPage;
