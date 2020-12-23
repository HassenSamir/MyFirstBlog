import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles.css";

import styled from "@emotion/styled";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "./Pages/HomePage";
import PostPage from "./Pages/PostPage";
import PostsPage from "./Pages/PostsPage";
import AboutUS from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import OurAuthors from "./Pages/OurAuthors";
import OurAuthor from "./Pages/OurAuthor";
import { Global, css } from "@emotion/react";

const GlobalStyles = css`
  @font-face {
    font-family: "Local Font";
    src: url("./fonts/NinjaNaruto.woff2") format("woff2"),
      url("./fonts/NinjaNaruto.woff") format("woff"),
      url("./fonts/NinjaNaruto.ttf") format("truetype"),
      url("https://fonts.googleapis.com/css?family=Dancing+Script&display=swap");
  }
`;

const StyledApp = styled.div`
  background-color: #fe9040;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  min-height: 753px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  font-family: "katana";
  margin: 0;
  padding: 0;
`;

export default function App() {
  return (
    <StyledApp>
      <Global styles={GlobalStyles} />
      <Header props="MY BLOG" />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Navigation />
            <HomePage />
          </Route>
          <Route path="/about-us" exact>
            <Navigation />
            <AboutUS />
          </Route>
          <Route path="/our-authors" exact>
            <Navigation />
            <OurAuthors />
          </Route>
          <Route path="/contact-us">
            <Navigation />
            <ContactUs />
          </Route>
          <Route path="/post/:id" exact>
            <Navigation />
            <PostPage />
          </Route>
          <Route path="/posts/" exact>
            <Navigation />
            <PostsPage />
          </Route>
          <Route path="/our-author/:id" exact>
            <Navigation />
            <OurAuthor />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </StyledApp>
  );
}
