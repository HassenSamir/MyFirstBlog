import React, { useState, useEffect, findDOMNode, useCallback } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const StyledPostPage = styled.div`
  background-color: #fe9040;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  min-height: 773px;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledPostContent = styled.div`
  width: 500px;
  margin-bottom: 50px;
`;

const StyledPostComments = styled.div`
  width: 500px;
`;

const StyledTitle = styled.h1`
  font-size: 34px;
`;

const StyledContent = styled.p`
  font-size: 16px;
  max-width: 600px;
`;

const StyledText = styled.p`
  font-size: 16px;
`;

const StyledComments = styled.div`
  border-top: 2px solid black;
  font-size: 16px;
  width: 500px;
  max-width: 600px;
  margin-top: 20px;
  justify-content: center;
`;

const StyledCommentNumber = styled.h3`
  font-weight: bold;
  margin-top: 30px;
  margin-left: 0px;
`;

const StyledCommentUl = styled.ul`
  font-size: 10px;
  list-style: none;
  overflow: auto;
  max-height: 150px;
`;
const StyledCommentDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  max-width: 400px;
`;

const StyledCommentAuthor = styled.h3`
  font-weight: bold;
`;

const StyledCommentLi = styled.li`
  font-size: 9px;
  margin-left: 10px;
  margin-right: 10px;
`;

const StyledTextArea = styled.textarea`
  width: 400px;
  height: 200px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

const StyledDivButton = styled.div`
  display: flex;
  bottom: 10px;
  justify-content: center;
`;

const StyledButton = styled.button`
  font-size: 16px;
  max-width: 600px;
`;
const TOKEN =
  "c3fe33d7e16a94f45e8a9250270e4bf7f8a4df8de09d8edd34f99721f21d99a9972a30ea186ee00cf37dbc0b8922e5f7bfc2863ba0dfb59a87b3d2285e6e95ead034825f4ef4f34c44533b082ad67817910315e7c393fe57cc39b936e976365dbd7bf967be78625a15fbf0fcb360abea7cc979eda39357b37b5f496b03c6d77131328e81a301b64452ed5d000555006c844f3a18d721ca3d3b7f7d90b43f496acbfd23a34ab2330865d08f87961e6442ce29418ed44a6083d02eb1a8c045d4cd21edd996a2ac6f1768288171ce5351739a7e6113bef8a8342cfdd06d609a5f53d0fa7dc903a6d9c08299641c8ce7dc7a3d949145a077e8737344e3aecfa5032a";

export default function PostPage() {
  let url = window.location.toString();
  let idUrl = url.slice(27, 30);
  let [authors, setAuthors] = useState([]);
  let [post, setPost] = useState([]);
  let [comments, setComments] = useState([]);
  let [comment, setComment] = useState("");

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

  const getPost = async (id) => {
    await axios
      .get(`https://supdevinci.nine1000.tech/posts/${id}`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          "x-token": TOKEN,
        },
      })
      .then((response) => {
        setPost(response.data);
      });
  };

  const getComment = async (id) => {
    await axios
      .get(`https://supdevinci.nine1000.tech/posts/${id}/comments`, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          "x-token": TOKEN,
        },
      })
      .then((response) => {
        setComments(response.data.result);
      });
  };

  const postComment = async (id) => {
    await axios.post(
      `https://supdevinci.nine1000.tech/posts/${id}/comments`,
      { content: comment },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Accept: "application/json",
          "x-token": TOKEN,
        },
      }
    );
    getComment(id);
  };

  useEffect(() => {
    getComment(idUrl);
    getPost(idUrl);
    getAuthors();
  }, [idUrl]);

  return (
    <StyledPostPage>
      <StyledPostContent>
        <StyledTitle>{post.title ? post.title : "No Title"}</StyledTitle>
        <StyledContent>
          {post.content ? post.content : "No Content"}
        </StyledContent>
        <StyledText>
          Consensio supplicio ire sit amicum quam aliquando sit minori curae
          concessum quidem modo supplicio bellum ne quod inferentem mortem res
          meam ut res coepit concessum consensio res bellum ne bellum sequi
          potius non est sit supplicio quam meam haud aliquando quod quidem omni
          meam amicum ne talis vindicanda tegenda potius post coepit modo quis
          bellum est potius mortem supplicio quis omni qualis qualis mortem quam
          patriae vindicanda non ut inferentem autem hodie omni tegenda meam
          quod scio sed excusatione omni coepit sequi sit tegenda coepit hodie
          qualis quis modo inferentem minori coepit est ire excusatione ire
          curae amicitiae coepit haud.
        </StyledText>
      </StyledPostContent>
      <StyledPostComments>
        <StyledComments>
          <StyledCommentNumber>{comments.length} comments.</StyledCommentNumber>
          <StyledCommentUl>
            {comments.map((x) => {
              return (
                <StyledCommentDiv key={x.id}>
                  <StyledCommentAuthor>
                    {getAuthorName(x.author)}
                  </StyledCommentAuthor>
                  <StyledCommentLi> {x.content}</StyledCommentLi>
                </StyledCommentDiv>
              );
            })}
          </StyledCommentUl>
        </StyledComments>
        <StyledTextArea
          onChange={(e) => {
            setComment(e.target.value);
          }}
        ></StyledTextArea>
        <StyledDivButton>
          <StyledButton
            onClick={() => {
              try {
                postComment(idUrl);
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Submit
          </StyledButton>
        </StyledDivButton>
      </StyledPostComments>
    </StyledPostPage>
  );
}
