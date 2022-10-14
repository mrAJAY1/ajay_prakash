import styled from "styled-components";
import { useEffect, useState } from "react";
import { HomeButton, Logo, SocialIcons } from "../subComponents";
import { Blogs } from "../data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "../subComponents/AnchorComponent";
import BigTitle from "../subComponents/BigTitle";

const MainContainer = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding-bottom: 5rem;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;
const Grid = styled.div`
  display: grid;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(calc(10rem + 15vw), 1fr));
  }
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;
function BlogPage() {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    const num = (window.innerHeight - 70) / 30;
    // eslint-disable-next-line radix
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer>
      <Container>
        <Logo />

        <HomeButton side />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
      </Container>
      <BigTitle text="Blogs" top="5%" right="18%" />
    </MainContainer>
  );
}

export default BlogPage;
