import React from "react";
import styled from "@emotion/styled";

const StyledAboutUs = styled.div`
  background-color: #fe9040;
  font-size: 24px;
  flex-direction: column;
  display: flex;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  overflow-x: hidden;
  flex: 1 0 550px;
`;

const StyledTitle = styled.h1`
  position: relative;
  left: 25%;
  margin-bottom: 0;
`;

const StyledH3 = styled.h3`
  position: relative;
  left: 30%;
`;

const StyledP = styled.p`
  display: flex;
  justify-content: center;
  max-width: 900px;
  text-align: center;
  margin-left: 20%;
`;

export default function AboutUs() {
  return (
    <StyledAboutUs>
      <StyledTitle>Hassen Samir</StyledTitle>
      <StyledH3>Who Am I</StyledH3>
      <StyledP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </StyledP>
    </StyledAboutUs>
  );
}
