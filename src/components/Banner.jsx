import React, { Component } from "react";
import s from "styled-components";
import scroll from "scroll-to-element";

import SocialMedia from "./SocialMedia";

const Container = s.div`
  display: flex;

  @media (max-width: 992px) {

  }
  @media (max-width: 768px) {
    flex-direction: column;  
  }
`;

const Violet = s.div`
  background-color: var(--violet);
  background: linear-gradient(90deg, var(--violet) 0%, #785FB0 100%);
  box-shadow: -4px 4px 6px rgba(95, 75, 139, 0.25);
  border-radius: 1px;
  max-width: 700px;
  width: 1000px;
  min-height: 600px;
  padding: 50px;
  @media (max-width: 992px) {
    width: initial;
    padding: 25px;
    padding-right: 35px;
    min-height: 100px;
    flex-grow: 1;
  }
  
  @media (max-width: 768px) {
    padding: 25px 10px;
    max-width: 100vw;
  }  
  
  h1,h2 {
    font-family: var(--font-playfair);
    font-weight: 400;
    letter-spacing: -0.05em;
  }
  h1 {
    font-size: 7.875rem;
    color: white;
    line-height: .5rem;
    margin-right: 70px;
    @media (max-width: 992px) {
      font-size: 6rem;
    }
    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
  h2 {
    color: var(--violet-light);
    font-size: 4.5rem;
    @media (max-width: 992px) {
      font-size: 3.25rem;
    }
    @media (max-width: 768px) {
      font-size:2rem;
    }
  }
  `;

const RightSide = s.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding-top: 20px;
    flex-grow: 1;
    max-width: 100vw;
    
  }
  `;

const Introduction = s.div`
  background-color: #fff;
  font-family: var(--font-montserrat);
  font-weight: 500;
  font-size: 1.5rem;
  color: var(--black);
  // max-width: 600px;
  padding: 40px 50px;
  margin-left: -90px;
  border-radius: 1px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.12);
  
  @media (max-width: 992px) {
    font-size: 1.125rem;
    padding: 30px 37px;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-left: 0;
    padding: 20px 25px;
    max-width: 100vw;
  }
  
  span {
    color: var(--violet);
  }
  strong{
    color: var(--violet-accent);
    }
`;

const Menu = s.nav`
  padding-top: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
  white-space:nowrap;
  
  a{
    font-family: var(--font-montserrat);
    font-weight: 700;
    font-size: 1.5rem;
    color: var(--violet);
    background-color: #F5F5FF;
    border: 1px solid var(--violet);
    border-radius: 2px;
    padding: 8px 10px;
    margin-left: 40px;
    transition: all .2s ease-in;
    display: block;
    @media (max-width: 1366px) {
      font-size: 1rem;
    }
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
  a.cta {
    color: white;
    background-color: var(--violet-accent);
    border-color: var(--violet-accent);
  }
`;

const SocialMediaContainer = s.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
  padding-top: 20px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

class Banner extends Component {
  render() {
    const scrollOptions = {
      offset: -100,
      // ease: "ease-in",
      duration: 1500
    };
    return (
      <Container>
        <Violet>
          <h1>
            I make <p>Websites</p>
          </h1>
          <h2>Among other things</h2>
        </Violet>
        <RightSide>
          <Introduction>
            <p>
              Hi, I’m <span>Jordan Gomes</span>, a web developer/designer,
              passionate across the stack.
            </p>
            <p>
              I love to <strong>design</strong>, <strong>prototype</strong>,{" "}
              <strong>code</strong>, <strong>test</strong> and{" "}
              <strong>look</strong> at websites.
            </p>
          </Introduction>
          <Menu>
            <a onClick={() => scroll("#skills", scrollOptions)} href="#">
              What can I do?
            </a>
            <a
              onClick={() => scroll("#contact", scrollOptions)}
              className="cta"
              href="#"
            >
              Hire me
            </a>
          </Menu>
          <SocialMediaContainer>
            <SocialMedia size={69} color="#5f4b8b" />
          </SocialMediaContainer>
        </RightSide>
      </Container>
    );
  }
}

export default Banner;
