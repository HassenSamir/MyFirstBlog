import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.div`
  background-color: #2a2827;
  color: white;
  text-align: center;
  flex: 1 1 auto;
`;
const StyledFooterP = styled.p``;

export default function Content() {
  return (
    <StyledFooter>
      <StyledFooterP>Footer</StyledFooterP>
    </StyledFooter>
  );
}
