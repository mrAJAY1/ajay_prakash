/* eslint-disable react/prop-types */
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import styled from "styled-components";
import { motion } from "framer-motion";
import { darkTheme } from "../Theme";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 2rem;
  @media (max-width: 768px) {
    left: 1.5rem;
  }
  bottom: 0;
  z-index: 3;
  svg {
    fill: ${(props) =>
      props.theme === "dark" ? darkTheme.text : darkTheme.body};
    transition: ${(props) =>
      props.click ? "fill 0.5s ease 1.4s" : "fill 0.5s ease 0.1s"};
    width: 25px;
    height: 25px;
  }
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;
const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  transition: ${(props) =>
    props.click
      ? "background-color 0.5s ease 1.4s"
      : "background-color 0.5s ease 0.1s"};
`;
function SocialIcons({ click, theme }) {
  return (
    <Icons click={click} theme={theme}>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mrAJAY1"
        >
          <BsGithub />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ajay-prakash-8767a9218/"
        >
          <BsLinkedin />
        </a>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Ajay_Prakash_pp"
        >
          <BsTwitter />
        </a>
      </motion.div>
      <Line click={click} color={theme} />
    </Icons>
  );
}

export default SocialIcons;
