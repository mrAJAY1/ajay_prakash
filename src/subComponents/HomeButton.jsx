import styled from "styled-components";
import { GoHome } from "react-icons/go";

const Home = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

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
    background-color: rgba(0, 214, 222, 0.8637413394919169);
    box-shadow: 0px 0px 20px 6px rgba(0, 214, 222, 0.8637413394919169);
    border-color: #fff;
    svg {
      fill: #fff !important;
    }
  }
`;

function HomeButton() {
  return (
    <Home>
      <GoHome fill="currentColor" style={{ width: "100%", height: "100%" }} />
    </Home>
  );
}

export default HomeButton;
