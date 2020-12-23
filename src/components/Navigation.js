import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledNavigation = styled.div`
  display: flex;
  background-color: #2a2827;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-family: "NinjaNaruto";
`;

const StyledUl = styled.ul`
  list-style-type: none;
`;
const Styledli = styled.li`
  display: inline;
  & + li {
    margin-left: 20px;
  }
  & > a {
    color: white;
    text-decoration: none;
  }
  & > a:hover {
    color: #fe9040;
    text-decoration: none;
  }
`;

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledUl>
        <Styledli>
          <Link to="/">🏠</Link>
        </Styledli>
        <Styledli>
          <Link to="/contact-us">Contact Us</Link>
        </Styledli>
        <Styledli>
          <Link to="/our-authors">Our Authors</Link>
        </Styledli>
        <Styledli>
          <Link to="/about-us">About Me</Link>
        </Styledli>
        <Styledli>
          <Link to="/posts">Posts</Link>
        </Styledli>
      </StyledUl>
    </StyledNavigation>
  );
}
