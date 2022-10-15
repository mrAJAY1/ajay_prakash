import styled from "styled-components";
import { HomeButton } from "../subComponents";
import FormComponent from "../subComponents/FormComponent";
import ParticleComponent from "../subComponents/ParticleComponent";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${(p) => p.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ContactPage() {
  return (
    <Container>
      <ParticleComponent theme="light" />
      <FormComponent />
      <HomeButton side left="1rem" top="3.5rem" />
    </Container>
  );
}

export default ContactPage;
