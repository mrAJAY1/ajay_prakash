import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import styled from "styled-components";

import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

const Box = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: 0;
`;
function ParticleComponent({ theme }) {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = async () => {};
  return (
    <Box>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        style={{ position: "absolute", top: 0 }}
        options={theme === "light" ? configLight : configDark}
      />
    </Box>
  );
}
export default ParticleComponent;
