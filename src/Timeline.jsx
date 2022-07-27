import styled from "styled-components";
import { Section, Link } from "./util";

const Projects = ({ children }) => {
  return (
    <Section mobileRowCount={1} wideRowCount={1}>
      <Wrapper>{children}</Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  grid-area: 2/2/2/10;
  gap: calc(4vh + 4px);

  @media (min-width: 750px) {
    grid-area: 3/7/3/26;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProjectRow = ({ name, timeRange, href, children }) => {
  return (
    <Project>
      <ProjectTime>{timeRange}</ProjectTime>
      {href ? (
        <ProjectNameLink href={href}>{name}</ProjectNameLink>
      ) : (
        <ProjectName>{name}</ProjectName>
      )}
      <ProjectDescription>{children}</ProjectDescription>
    </Project>
  );
};

const Project = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (min-width: 750px) {
    flex-wrap: nowrap;
  }
`;

const ProjectTime = styled.div`
  margin-right: 12px;
  margin-bottom: 2vh;

  @media (min-width: 750px) {
    min-width: calc(11vw + 3px);
    max-width: calc(11vw + 3px);
  }
`;

const ProjectName = styled.div`
  font-weight: bold;
  margin-right: auto;
  white-space: normal;

  @media (min-width: 750px) {
    min-width: calc(18vw);
    max-width: calc(18vw);
    margin-right: 12px;
  }
`;

const ProjectNameLink = styled(Link)`
  font-weight: bold;
  margin-right: auto;
  white-space: normal;

  @media (min-width: 750px) {
    min-width: calc(18vw);
    max-width: calc(18vw);
    margin-right: 12px;
  }
`;

const ProjectDescription = styled.div`
  width: 100%;

  @media (min-width: 750px) {
    width: auto;
  }

  @media screen and (min-width: 0px) and (max-width: calc(1943px)) and (orientation: portrait) {
    font-size: calc((1.5 - 1) * 1.2vh + 1rem);
  }

  @media screen and (min-width: 0px) and (max-width: calc(1943px)) and (orientation: landscape) {
    font-size: calc((1.5 - 1) * 1.2vh + 1rem);
  }
`;

export default Projects;
