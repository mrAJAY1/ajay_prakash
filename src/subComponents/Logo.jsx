/* eslint-disable react/prop-types */
import styled from "styled-components";

const LogoContainer = styled.h1`
  display: inline-block;
  color: ${(props) => (props.click ? "yellow" : props.theme.text)};
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
`;
function Logo({ click }) {
  return <LogoContainer click={click}>Ajay</LogoContainer>;
}

export default Logo;
