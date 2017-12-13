import React, { Component } from "react";
import s from "styled-components";

import skills from "../skills";

const Container = s.div`
  font-family: var(--font-raleway);
  margin-top: 100px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 150px;
  @media (max-width: 992px) {
    grid-gap: 80px
  }
  @media (max-width: 768px) {
    grid-gap: 20px;
  }
`;

const Options = s.ul`
  padding: 0;
  padding-top: 40px;
  position: relative;
`;

const SingleOption = s.li`
  cursor: pointer;
  color: ${props =>
    props.selected ? "var(--violet-accent)" : "rgba(95, 75, 139, 0.64)"};
  // background-color: ${props => (props.selected ? "#F5F5FF" : "transparent")};
  vertical-align: center;
  font-weight: 700;
  font-size: 1.125rem;
  text-transform: uppercase;
  padding: 14px 16px;
  white-space:nowrap;
  transition: 0.3s all cubic-bezier(.165,.84,.44,1);
  &:hover {
    color: ${props =>
      props.selected ? "var(--violet-accent)" : "var(--violet)"}
  }
`;

const SkillPanel = s.div`
    h2{
      font-weight: 700;
      font-size: 2rem;
      color: var(--violet);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      padding-left: 20px;
    }
    p {
      color: var(--black);
      font-size: 1.25rem;
      letter-spacing: 0.1rem;
      padding: 30px 20px;
      border-radius: 2px;
      transition: .3s all ease-in;
      &:hover {
        background-color: var(--violet-light);
      }
    }
`;

const Selected = s.span`
    width: 100%;
    height: 50px;
    position:absolute;
    display: block;
    background-color: white;
    z-index: -1;
    border-radius: 4px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.12);
    transition: 0.3s all cubic-bezier(.165,.84,.44,1);
    transform: translateY(${props => `${props.selected * 92}%`});
`;

class Skills extends Component {
  state = {
    selectedTab: 0
  };

  changeTab = i => {
    this.setState({
      selectedTab: i
    });
  };

  render() {
    return (
      <Container>
        <Options>
          <Selected selected={this.state.selectedTab} />
          {skills.map((skill, i) => (
            <SingleOption
              selected={this.state.selectedTab === i}
              onClick={() => this.changeTab(i)}
              key={skill.title}
            >
              {skill.title}
            </SingleOption>
          ))}
        </Options>
        <SkillPanel>
          <h2>{skills[this.state.selectedTab].title}</h2>
          <p>{skills[this.state.selectedTab].description}</p>
        </SkillPanel>
      </Container>
    );
  }
}

export default Skills;
