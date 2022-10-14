/* eslint-disable react/prop-types */
import styled from "styled-components";

const LogoContainer = styled.h1`
  display: inline-block;
  line-height: 2rem;
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  transition: ${(props) =>
    props.click
      ? "color 0.3s ease 1.4s,text-shadow 0.3s ease 1.4s"
      : "color 0.3s ease 0.1s, text-shadow 0.3s ease 1.4s"};
  text-shadow: 0px 0px 1px yellow;
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  @media (max-width: 768px) {
    text-orientation: ${(props) => (props.home ? null : "upright")};
    writing-mode: ${(props) => (props.home ? null : "vertical-lr")};
    line-height: ${(props) => (props.home ? null : "0rem")};
  }
`;
function Logo({ click, home }) {
  return (
    <LogoContainer home={home} click={click}>
      Ajay
    </LogoContainer>
  );
}

export default Logo;
