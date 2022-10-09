/* eslint-disable react/prop-types */
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import styled from "styled-components";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 3;
  svg {
    fill: ${(props) => (props.click ? props.theme.body : "currentColor")};
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
    props.click ? props.theme.body : props.theme.text};
  transition: ${(props) =>
    props.click
      ? "background-color 0.5s ease 1.4s"
      : "background-color 0.5s ease 0.1s"};
`;
function SocialIcons({ click }) {
  return (
    <Icons click={click}>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/mrAJAY1"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/ajay-prakash-8767a9218/"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Ajay_Prakash_pp"
        >
          <BsTwitter />
        </a>
      </div>
      <Line click={click} />
    </Icons>
  );
}

export default SocialIcons;
