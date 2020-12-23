import React, { useState, useEffect, findDOMNode, useCallback } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const StyledErr = styled.p`
  color: red;
`;
const StyledTitleH3 = styled.h3`
  max-width: 1000px;
`;

const StyledAuthorName = styled.span`
  font-size: 15px;
  color: #617d98;
  background-color: #f1f5f8;
  font-weight: bold;
  padding: 5px;
  margin-left: 0px;
  border-radius: 5px;
`;

const StyledTitle = styled.h2`
  display: flex;
  height: 40px;
  position: relative;
  top: 0px;
  left: 220px;
  padding-bottom: 0;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px 0 0 40px;
  max-width: 1000px;
  justify-content: center;
`;
const Styledli = styled.li`
  padding-left: 0px;
  margin-left: 0px;
  max-width: 1000px;
  margin-bottom: 15%;
  text-align: left;

  & > a {
    color: black;
    text-decoration: none;
  }
  & > a:hover {
    color: blue;
    text-decoration: none;
  }
`;
const StyledPosts = styled.div`
  display: flex;
  margin-top: 105px;
  margin-left: 10px;
  width: 1000px;
  height: 400px;
  max-width: 1000px;
`;

const StyledLastPostsLi = styled.li`
  color: blue;

  & > a {
    color: black;
    text-decoration: none;
  }
  & > a:hover {
    color: blue;
    text-decoration: none;
  }
`;

const StyledLastPostsUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-left: -30px;
`;

const StyledLastPostsTitle = styled.h3`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 20px;
  margin-left: 100px;
  height: 20px;
`;

const StyledLastPostsUlDiv = styled.div`
  border: 2px solid black;
  margin-top: 200px;
  width: 400px;
  height: 200px;
  overflow-y: scroll;
`;

const StyledLastPosts = styled.div`
  display: flex;
  margin-top: 105px;
  border-color: red;
  border: 2px solid black;
  width: 300px;
  height: 400px;
`;

const StyledCenterDiv = styled.div`
  display: flex;
  margin-left: 220px;
  overflow-y: scroll;
`;

const StyledHomeContent = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  flex: 1 0 550px;
`;

const TOKEN =
  "c3fe33d7e16a94f45e8a9250270e4bf7f8a4df8de09d8edd34f99721f21d99a9972a30ea186ee00cf37dbc0b8922e5f7bfc2863ba0dfb59a87b3d2285e6e95ead034825f4ef4f34c44533b082ad67817910315e7c393fe57cc39b936e976365dbd7bf967be78625a15fbf0fcb360abea7cc979eda39357b37b5f496b03c6d77131328e81a301b64452ed5d000555006c844f3a18d721ca3d3b7f7d90b43f496acbfd23a34ab2330865d08f87961e6442ce29418ed44a6083d02eb1a8c045d4cd21edd996a2ac6f1768288171ce5351739a7e6113bef8a8342cfdd06d609a5f53d0fa7dc903a6d9c08299641c8ce7dc7a3d949145a077e8737344e3aecfa5032a";

export default function OurAuthors() {
  let [post, setPost] = useState([]);
  let [authors, setAuthors] = useState([]);

  const getPost = async () => {
    await axios
      .get(`https://supdevinci.nine1000.tech/posts/?limit=100&offset=0`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          "x-token": TOKEN,
        },
      })
      .then((response) => {
        setPost(response.data.result);
      });
  };

  const getAuthors = async () => {
    await axios
      .get(`https://supdevinci.nine1000.tech/authors/?limit=100&offset=0`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          "x-token": TOKEN,
        },
      })
      .then((response) => {
        setAuthors(response.data.result);
      });
  };

  function getAuthorName(id) {
    let resp = authors.map((x) => {
      if (id == x.id) {
        return x.display_name;
      }
    });
    return resp;
  }

  function getAuthorNumberPosts(id) {
    let numberOfPosts = 0;
    let resp = post.map((x) => {
      if (id == x.author) {
        numberOfPosts++;
      }
    });
    return numberOfPosts;
  }

  function authorsPrint() {
    let resp = authors.map((x, y) => {
      return (
        <Styledli key={x.id}>
          <Link to={"/our-author/" + x.id}>
            <StyledAuthorName>{getAuthorName(x.id)}</StyledAuthorName>
          </Link>{" "}
          Posts : {getAuthorNumberPosts(x.id)}
        </Styledli>
      );
    });
    return resp;
  }

  useEffect(() => {
    getPost();
    getAuthors();
  }, []);

  return (
    <StyledHomeContent>
      <StyledCenterDiv>
        <StyledTitle>Our Authors</StyledTitle>
        <StyledPosts>
          <StyledUl>{authorsPrint()}</StyledUl>
        </StyledPosts>
      </StyledCenterDiv>
    </StyledHomeContent>
  );
}
