import React from "react";
import styled from "@emotion/styled";

const StyledContactUs = styled.div`
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

const StyledFormat = styled.form`
  position: relative;
  top: 40px;
  left: 30%;
  margin-bottom: 0;
  width: 600px;
  height: 400px;
`;

const StyledLabelLastName = styled.label`
  position: relative;
  top: 0px;
  left: 0%;
  margin-bottom: 0;
`;

const StyledInputLastName = styled.input`
  margin-left: 50px;
  margin-top: 0px;
`;

const StyledLabelFirstName = styled.label`
  position: absolute;
  top: 60px;
  left: 0%;
  margin-bottom: 100px;
`;

const StyledInputFirstName = styled.input`
  position: absolute;
  top: 60px;
  left: 17%;
  margin-left: 0px;
  margin-top: 0px;
`;

const StyledLabelComment = styled.label`
  position: absolute;
  top: 120px;
  left: 0%;
  margin-bottom: 100px;
`;

const StyledComment = styled.textarea`
  position: absolute;
  top: 40%;
  left: 0%;
  margin-bottom: 100px;
  height: 200px;
  width: 400px;
`;

const StyledButton = styled.button`
  position: absolute;
  top: 84%;
  right: 14%;
  margin-bottom: 100px;
  height: 30px;
  width: 100px;
`;

export default function ContactUs() {
  return (
    <StyledContactUs>
      <StyledTitle>Contact Me</StyledTitle>
      <StyledFormat>
        <StyledLabelLastName>Name</StyledLabelLastName>
        <StyledInputLastName></StyledInputLastName>
        <StyledLabelFirstName>Email</StyledLabelFirstName>
        <StyledInputFirstName></StyledInputFirstName>
        <StyledLabelComment>Comments</StyledLabelComment>
        <StyledComment></StyledComment>
        <StyledButton>Submit</StyledButton>
      </StyledFormat>
    </StyledContactUs>
  );
}
