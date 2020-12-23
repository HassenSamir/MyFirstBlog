import React from "react";
import styled from "@emotion/styled";

const StyledHeader = styled.div`
  display: flex;
  background-color: #2a2827;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding-top: 10px;
  color: white;
  font-family: "Katana";
`;

export default function Header({ props }) {
  return (
    <>
      <StyledHeader>
        <h1>{props}</h1>
      </StyledHeader>
    </>
  );
}
