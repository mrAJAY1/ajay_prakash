import { useEffect, useRef } from "react";
import styled from "styled-components";

const Box = styled.h1`
  position: absolute;
  width: 30px;
  height: 30px;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
  transition: 0.09s;
  pointer-events: none;
  user-select: none;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

function MouseTracker() {
  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };
  const ref = useRef(null);
  const handlePointer = (e) => {
    if (!isTouchDevice()) {
      const x = e.clientX;
      const y = e.clientY;
      ref.current.style.left = `${x}px`;
      ref.current.style.top = `${y}px`;
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handlePointer);

    return () => window.removeEventListener("mousemove", handlePointer);
  }, []);
  return <Box ref={ref} />;
}

export default MouseTracker;
