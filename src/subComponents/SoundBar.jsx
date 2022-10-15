/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-props-no-spreading */
import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import music from "../assets/audio/epic-cinematic-trailer-113981 (1).mp3";

const shadower = keyframes`
0%{
    transform:none;
    border:none;
}
5%{
    transform: scale(1.02) rotate(3deg);
}
10%{
    transform: scale(1.02) rotate(-3deg);

}
15%{
    transform: scale(1.02) rotate(5deg);
}
20%{
    transform: scale(1.02) rotate(-5deg);
}
25%{
    transform:none;
}
`;
const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  animation: ${shadower} 3s ease infinite;
  right: 3rem;
  top: 3rem;
  z-index: 10;
  @media (max-width: 768px) {
    right: ${(props) => (props.home ? "3rem" : "auto")};
    right: ${(props) => (props.home ? null : "1rem")};
  }
`;
const play1 = keyframes`
0%{
    transform:scaleY(1.5)
}
50%{
    transform:scaleY(1)
}
100%{
    transform:scaleY(1.5)
}
`;
const play2 = keyframes`
0%{
    transform:scaleY(2)
}
50%{
    transform:scaleY(1)
}
100%{
    transform:scaleY(2)
}
`;
const play = keyframes`
0%{
    transform:scaleY(1)
}
50%{
    transform:scaleY(2)
}
100%{
    transform:scaleY(1)
}
`;
const Line = styled.span`
  background: ${(p) => p.theme.text};
  border: 1px solid ${(p) => p.theme.body};
  animation: ${play} 1s ease infinite;
  &:nth-child(2) {
    animation: ${play1} 1.5s ease infinite;
    animation-play-state: ${(p) => (p.click ? "running" : "paused")};
  }
  &:nth-child(3) {
    animation: ${play2} 1s ease infinite;
    animation-play-state: ${(p) => (p.click ? "running" : "paused")};
  }
  &:nth-child(4) {
    animation: ${play1} 1s ease infinite;
    animation-delay: 0.5s;
    animation-play-state: ${(p) => (p.click ? "running" : "paused")};
  }
  &:nth-child(5) {
    animation: ${play2} 1s ease infinite;
    animation-delay: 0.8s;
    animation-play-state: ${(p) => (p.click ? "running" : "paused")};
  }
  &:nth-child(6) {
    animation: ${play1} 1s ease infinite;
    animation-delay: 0.6s;
    animation-play-state: ${(p) => (p.click ? "running" : "paused")};
  }
  animation-play-state: ${(p) => (p.click ? "running" : "paused")};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

function SoundBar({ home }) {
  const ref = useRef(null);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    if (!click) {
      ref.current.volume = 0.5;
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };
  return (
    <Box home={home} click={click} onClick={handleClick}>
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <Line click={click} />
      <audio loop ref={ref} src={music} />
    </Box>
  );
}

export default SoundBar;
