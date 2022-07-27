import styled from "styled-components";
import { site } from "./constants";
import { Link } from "./util";
import Burger from "./Burger";
import React from "react";

const Header = ({ children }) => {
  const [burgerOpen, setBurgerOpen] = React.useState(false);

  return (
    <>
      <Wrapper isOpen={burgerOpen}>
        <HeadContent>
          <HeadLogo href="/">Michelle</HeadLogo>

          <HeadLinks>{children}</HeadLinks>

          <BurgerWrapper>
            <Burger
              isOpen={burgerOpen}
              onClick={() => setBurgerOpen(!burgerOpen)}
            />
          </BurgerWrapper>
        </HeadContent>
      </Wrapper>

      <HeadLinksBig isOpen={burgerOpen}>{children}</HeadLinksBig>
    </>
  );
};

// Extends the Link component
export const HeadText = styled(Link)``;

const Wrapper = styled.header`
  z-index: 10;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  line-height: 1;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  display: flex;
  flex-direction: column;
`;

const HeadContent = styled.div`
  margin: 3vw 4vw 3vw 4vw;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

const HeadLinksBig = styled.div`
  padding-top: 119.733px;

  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  will-change: opacity, visibility;
  user-select: none;
  text-align: center;
  pointer-events: auto;

  background-color: ${site.background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transform: translatey(20px);
  transition: visibility 600ms, opacity 400ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform, visibility;

  ${HeadText} {
    display: block;
    margin: 3vw 5vw;
    font-size: 6.6vmin;
    font-weight: bold;
  }

  @media only screen and (pointer: coarse) and (max-width: 1024px),
    screen and (max-width: 799px) {
    z-index: 2;
    visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
    transform: ${(props) =>
      props.isOpen ? "translatey(0px)" : "translatey(20px)"};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
  }
`;

const HeadLinks = styled.div`
  text-align: right;
  margin-left: auto;
  padding-left: 1vw;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.3vw;

  @media only screen and (pointer: coarse) and (max-width: 1024px),
    screen and (max-width: 799px) {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  text-align: right;
  margin-left: auto;
  padding-left: 1vw;

  display: none;

  @media only screen and (pointer: coarse) and (max-width: 1024px),
    screen and (max-width: 799px) {
    display: initial;
  }
`;

const HeadLogo = styled.a`
  color: ${site.color};
  opacity: 1;
  text-decoration: none;

  flex-grow: 0;
  flex-shrink: 0;
  backface-visibility: hidden;
  background: transparent;

  font-weight: 600;
  font-style: normal;
  letter-spacing: 0em;
  text-transform: none;
  line-height: 1.4em;

  :active,
  :hover {
    outline: 0;
  }

  @media screen and (min-width: 0px) and (max-width: calc(1943px)) and (orientation: landscape) {
    font-size: calc((2 - 1) * 1.2vw + 1rem);
  }
`;

export default Header;
