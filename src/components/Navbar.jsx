import React from "react";
import s from "styled-components";

const Container = s.div`
  padding-top: 60px;
  padding-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items:center;

  @media (max-width: 1366px) {
    padding-top: 30px;
  }  
  @media (max-width: 768px) {
    padding: 10px;
  }  
`;

const Logo = s.img`
`;

const Nav = s.nav`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    flex-wrap: wrap;
  }
  white-space:nowrap;

  a{
    font-family: var(--font-montserrat);
    font-weight: 700;
    font-size: 0.875rem;
    color: var(--violet);
    background-color: white;
    border: 1px solid var(--violet);
    border-radius: 2px;
    padding: 8px 10px;
    transition: all .2s ease-in;
    margin-left: 10px;
    margin-top: 10px;
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

const Navbar = () => (
  <Container>
    <Logo src="/public/img/logo.svg" />
    <Nav>
      <a href="#">What can I do</a>
      <a className="cta" href="#">
        Hire me
      </a>
    </Nav>
  </Container>
);

export default Navbar;
