/* eslint-disable react/jsx-props-no-spreading */
import styled from "styled-components";
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Home = styled.button`
  position: fixed;
  left: ${(props) => (props.side ? "2rem" : "50%")};
  top: ${(props) => (props.side ? "50%" : "2rem")};
  transform: ${(props) =>
    props.side ? "translate(0,-50%)" : " translate(-50%, 0)"};
  @media (max-width: 768px) {
    left: ${(p) => (p.side ? p.left || "1.5rem" : null)};
    top: ${(p) => (p.side ? p.top || "50%" : null)};
    transform: ${(p) => (p.side ? "translate(0, -50%)" : null)};
  }
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: black;
    border-color: #fff;
    svg {
      fill: #fff !important;
    }
  }
`;

function HomeButton(props) {
  const navigate = useNavigate();
  return (
    <Home {...props} onClick={() => navigate("/")}>
      <GoHome fill="currentColor" style={{ width: "100%", height: "100%" }} />
    </Home>
  );
}

export default HomeButton;
