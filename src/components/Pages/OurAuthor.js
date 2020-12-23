import React, { useState, useEffect, findDOMNode, useCallback } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";

const StyledErr = styled.p`
  color: red;
`;
const StyledTitleH3 = styled.h3`
  max-width: 1000px;
  text-align: left;
`;

const StyledAuthorName = styled.span`
  font-size: 15px;
  color: #617d98;
  background-color: #f1f5f8;
  font-weight: bold;
  padding: 5px;
  margin-left: 0px;
  border-radius: 5px;
  text-align: left;
`;

const StyledTitle = styled.h3`
  height: 40px;
  position: sticky;
  top: 7%;
  left: 30%;
  padding-bottom: 0;
  min-width: 500px;
  margin-bottom: 20px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px 0 0 20px;
  max-width: 1000px;
`;
const Styledli = styled.li`
  padding-left: 0px;
  margin-left: 20px;
  max-width: 1000px;

  & + li {
    margin-top: 0%;
  }

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
  margin-top: 20px;
  margin-left: 10px;
  width: 1000px;
  height: 500px;
  max-width: 1000px;
`;

const StyledAdminDiv = styled.div`
  position: absolute;
  top: 60%;
  left: 7%;
  width: 300px;
  height: 200px;
`;

const StyledLabelTitle = styled.label`
  position: absolute;
  font-size: 17px;
  top: 7%;
  left: 0%;
`;

const StyledInput = styled.input`
  position: absolute;
  top: 7%;
  left: 30%;
  border: 2px solid black;
`;

const StyledLabelContent = styled.label`
  position: absolute;
  font-size: 17px;
  top: 25%;
  left: 0%;
`;

const StyledTextArea = styled.textarea`
  position: absolute;
  bottom: 12%;
  width: 295px;
  height: 100px;
`;

const StyledButton = styled.button`
  font-size: 16px;
  max-width: 600px;
  position: absolute;
  bottom: 0%;
  right: 0%;
`;

const StyledButtonDelete = styled.button``;

const StyledButtonUpdate = styled.button``;

const StyledCenterDiv = styled.div`
  margin-top: 5%;
  display: flex;
  margin-left: -250px;
  overflow-y: scroll;
  height: 80%;
`;

const StyledHomeContent = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  flex: 1 0 550px;
`;

const StyledDivP = styled.p`
  text-align: center;
  margin-top: 40%;
`;

const StyledImg = styled.img``;

const StyledDivImg = styled.div`
  position: sticky;
  top: 20px;
  left: 165px;
  width: 200px;
  height: 200px;
  border: 2px solid black;
`;

const TOKEN =
  "c3fe33d7e16a94f45e8a9250270e4bf7f8a4df8de09d8edd34f99721f21d99a9972a30ea186ee00cf37dbc0b8922e5f7bfc2863ba0dfb59a87b3d2285e6e95ead034825f4ef4f34c44533b082ad67817910315e7c393fe57cc39b936e976365dbd7bf967be78625a15fbf0fcb360abea7cc979eda39357b37b5f496b03c6d77131328e81a301b64452ed5d000555006c844f3a18d721ca3d3b7f7d90b43f496acbfd23a34ab2330865d08f87961e6442ce29418ed44a6083d02eb1a8c045d4cd21edd996a2ac6f1768288171ce5351739a7e6113bef8a8342cfdd06d609a5f53d0fa7dc903a6d9c08299641c8ce7dc7a3d949145a077e8737344e3aecfa5032a";

export default function OurAuthor() {
  let [post, setPost] = useState([]);
  let [authors, setAuthors] = useState([]);
  let [newPostTitle, setNewPostTitle] = useState("");
  let [newPostContent, setNewPostContent] = useState("");
  let url = window.location.toString();
  let idUrl = url.slice(33, 37);
  let idAuthor = parseInt(idUrl);
  let authorAdmin = true;

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

  function authorsNamePrint() {
    let resp = authors.map((x, y) => {
      if (idAuthor == x.id) {
        return x.display_name;
      }
    });
    return resp;
  }
  const deletePost = async (id) => {
    await axios.delete(`https://supdevinci.nine1000.tech/posts/${id}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json",
        "x-token": TOKEN,
      },
    });
    getPost();
  };

  function isAdminChangePost(x) {
    return (
      <>
        <StyledButtonDelete
          onClick={() => {
            try {
              deletePost(x.id);
            } catch (e) {
              console.log(e);
            }
          }}
        >
          Delete
        </StyledButtonDelete>
        <StyledButtonUpdate>Update</StyledButtonUpdate>
      </>
    );
  }

  function postsPrint() {
    let resp = post.map((x, y) => {
      let titleN = "";
      let textToLong = false;
      if (x.title.length > 50) {
        titleN = x.title.substring(0, 50) + "...";
        textToLong = true;
      }
      if (x.author == idAuthor) {
        return (
          <Styledli key={x.id}>
            <StyledAuthorName>{x.created_at}</StyledAuthorName>
            {idAuthor == 16 ? isAdminChangePost(x) : null}
            <Link to={"/post/" + x.id}>
              {x.title ? (
                textToLong === true ? (
                  <StyledTitleH3>{titleN}</StyledTitleH3>
                ) : (
                  <StyledTitleH3>{x.title}</StyledTitleH3>
                )
              ) : (
                <StyledErr>NoTitle</StyledErr>
              )}
            </Link>
          </Styledli>
        );
      }
    });
    return resp;
  }

  const newPost = async (id) => {
    await axios.post(
      `https://supdevinci.nine1000.tech/posts`,
      {
        title: newPostTitle,
        content: newPostContent,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          "x-token": TOKEN,
        },
      }
    );
    getPost();
  };

  function isAdmin() {
    if (idAuthor === 16) {
      return (
        <>
          <StyledLabelTitle>New Title : </StyledLabelTitle>
          <StyledInput
            onChange={(e) => {
              setNewPostTitle(e.target.value);
            }}
          ></StyledInput>
          <StyledLabelContent>Content : </StyledLabelContent>
          <StyledTextArea
            onChange={(e) => {
              setNewPostContent(e.target.value);
            }}
          ></StyledTextArea>
          <StyledButton
            onClick={() => {
              try {
                newPost(16);
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Submit
          </StyledButton>
        </>
      );
    }
  }

  useEffect(() => {
    getPost();
    getAuthors();
  }, []);

  return (
    <StyledHomeContent>
      <StyledDivImg>
        <StyledDivP>Authors IMG</StyledDivP>
      </StyledDivImg>
      <StyledTitle>{authorsNamePrint()}</StyledTitle>
      <StyledCenterDiv>
        <StyledAdminDiv>{isAdmin()}</StyledAdminDiv>
        <StyledPosts>
          <StyledUl>{postsPrint()}</StyledUl>
        </StyledPosts>
      </StyledCenterDiv>
    </StyledHomeContent>
  );
}
