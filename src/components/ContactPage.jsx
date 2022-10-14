import styled from "styled-components";
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
    </Container>
  );
}

export default ContactPage;
