/* eslint-disable react/no-array-index-key */

import { motion } from "framer-motion";
import styled from "styled-components";
import { Github } from "../icons/AllSvg";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;
  @media (max-width: 768px) {
    width: 15rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;
const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;
const Descr = styled.h2`
  font-size: calc(1em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
`;
const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    border: 2px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
const Ongoing = styled.span`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 0.5rem calc(0.5rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    border: 2px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;
const Git = styled.a`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

function Card({ data }) {
  const { status, name, description, tags, demo, github } = data;
  return (
    <Box variants={item}>
      <Title>{name}</Title>
      <Descr>{description}</Descr>
      <Tags>
        {tags.map((t, ind) => {
          return <Tag key={ind}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        {status === 0 && (
          <Link href={demo} target="_blank">
            Visit
          </Link>
        )}
        {status === 2 && <Ongoing>Ongoing</Ongoing>}
        <Git href={github} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
}

export default Card;
