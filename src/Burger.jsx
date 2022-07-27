import styled from "styled-components";
import { site } from "./constants";

const Burger = ({ isOpen, onClick }) => {
  return (
    <Box onClick={onClick}>
      <Line isOpen={isOpen} isTop={true} />
      <Line isOpen={isOpen} isTop={false} />
    </Box>
  );
};

const Box = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
`;

const Line = styled.div`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  content: "";

  background-color: ${site.color};
  width: ${(props) => (props.isOpen ? "28px" : "100%")};
  height: 1px;

  transform: ${(props) => {
    const sign = props.isTop ? "-" : "";

    if (props.isOpen) {
      return `translatex(3.5px) rotate(${sign}135deg)`;
    }

    return `translatey(${sign}5.5px)`;
  }};

  transition: transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1),
    width 250ms cubic-bezier(0.2, 0.6, 0.3, 1);
  will-change: transform, width;
`;

export default Burger;
