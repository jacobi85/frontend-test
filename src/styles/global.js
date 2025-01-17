import styled from "styled-components";
import breakpoints, { defaultBreakpoints } from "styled-components-breakpoints";

export const media = breakpoints(defaultBreakpoints);

export const StyledContainer = styled.section`
  min-width: 200px;
  max-width: 1090px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 3;
  position: relative;
  ${media.minWidth("m")`
    padding: 0 60px;
  `}
`;
