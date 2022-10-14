// import Particles from "react-tsparticles";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "../Theme";
import { SocialIcons, HomeButton, Logo } from "../subComponents";
import ParticleComponent from "../subComponents/ParticleComponent";
import me from "../assets/Images/me-flying.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const shake = keyframes`
  20%{
    transform: translateY(10px) rotate(5deg);
  }
  100%{
    transform: none;
  }
`;
const Panda = styled.div`
  position: absolute;
  bottom: 10%;
  right: 15%;
  width: 20vw;
  height: 60vh;
  img {
    width: 150%;
    @media (max-width: 768px) {
      width: 200%;
    }

    height: auto;
    animation: ${shake} 3s infinite linear;
  }
`;
function AboutPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton side theme="light" />
        <ParticleComponent theme="dark" />
        <Panda>
          <img src={me} alt="robo" />
        </Panda>
      </Box>
    </ThemeProvider>
  );
}

export default AboutPage;
