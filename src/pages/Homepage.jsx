import React, { Component } from "react";
import s from "styled-components";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Skills from "../components/Skills";

const Wrapper = s.div`
  padding: 0 100px;

  @media (max-width: 1366px) {
    padding: 0 50px;
  }
  @media (max-width: 992px) {
    padding: 0 50px;
  }
  @media (max-width: 768px) {
    padding: 0 ;
  }    
`;

class Homepage extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Banner />
        <Skills />
      </Wrapper>
    );
  }
}

export default Homepage;
