/* eslint-disable react/no-array-index-key */
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Anchor, Linkicon } from "../icons/AllSvg";

const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(-100%);

  .chain {
    transform: rotate(135deg);
  }
`;
const Predisplay = styled.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;
function AnchorComponent({ number }) {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;
      const diff = Math.max(bodyHeight - (scrollPosition + windowSize));

      const diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.scrollY > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Container>
      <Predisplay ref={hiddenRef}>
        <Anchor width={70} height={70} fill="currentColor" />
      </Predisplay>
      <Slider ref={ref}>
        {[...Array(number)].map((x, id) => {
          return (
            <Linkicon
              width={25}
              height={25}
              fill="currentColor"
              key={id}
              className="chain"
            />
          );
        })}
        <Anchor width={70} height={70} fill="currentColor" />
      </Slider>
    </Container>
  );
}

export default AnchorComponent;
