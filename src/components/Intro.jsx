import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/Images/sticker.png";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 57%;
    transform: translate(-50%, 0%);
    width: 110%;
    height: auto;
    @media (max-width: 1200px) {
      width: 180%;
      left: 30%;
    }
  }
`;
const shake = keyframes`
  3%{
    transform: scale(1.05) rotate(10deg);
  }
  6%{
    transform: scale(1.05) rotate(-10deg);
  }
  9%{
    transform: scale(1.05) rotate(10deg);
  }
  12%{
    transform: none;
  }
`;
const Text = styled(motion.div)`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.3em + 1.5vw);
    font-weight: 300;
  }
  .headwrap {
    display: flex;
  }
  h1:first-child {
    display: inline-flex;
    animation: ${shake} 5s infinite linear 2s;
  }
  h1 {
    animation: ${shake} 5s infinite linear 2.2s;
  }

  h3:first-child {
    animation: ${shake} 5s infinite linear 2.4s;
  }
  h3:nth-child(2) {
    animation: ${shake} 5s infinite linear 2.6s;
  }
`;
function Intro() {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 1, delay: 1 }}
    >
      <SubBox>
        <Text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="headwrap">
            <h1>hi</h1>
            <h1>,</h1>
          </div>
          <div className="namewrap">
            <h3>I&#39;m&#160;</h3>
            <h3>Ajay</h3>
          </div>
          <h6>I design and build high-grade things for the web</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.99 }}
        >
          <img className="pic" src={Me} alt="Cartoon Dev" />
        </motion.div>
      </SubBox>
    </Box>
  );
}

export default Intro;
