import styled from "styled-components";
import { site } from "./constants";

// TBH I don't really understand some of the calculations
export const Section = styled.section`
  width: 100%;

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  row-gap: 11px;
  column-gap: 11px;

  --grid-gutter: calc(${site.mobileGutter} - 11px);
  --cell-max-width: calc((${site.maxWidth} - (11px * (8 - 1))) / 8);

  grid-template-rows: repeat(
    ${(props) => props.mobileRowCount},
    minmax(6vw, auto)
  );
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr) repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);

  @media (min-width: 750px) {
    --grid-gutter: calc(${site.gutter} - 11px);
    --cell-max-width: calc((${site.maxWidth} - (11px * (24 - 1))) / 24);
    --row-height-scaling-factor: 0.0215;
    --container-width: min(
      ${site.maxWidth},
      calc(100vw - ${site.gutter} * 2 - ${site.insetPadding})
    );

    grid-template-rows: repeat(
      ${(props) => props.wideRowCount},
      minmax(
        calc(var(--container-width) * var(--row-height-scaling-factor)),
        auto
      )
    );
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr) repeat(
        24,
        minmax(0, var(--cell-max-width))
      )
      minmax(var(--grid-gutter), 1fr);
  }
`;

export const Link = styled.a`
  color: ${site.color};
  opacity: 1;
  text-decoration: none;

  white-space: nowrap;

  :active,
  :hover {
    outline: 0;
  }
`;
