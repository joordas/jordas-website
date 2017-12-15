import React, { Component } from "react";
import s from "styled-components";

import skills from "../skills";

const Container = s.section`
  font-family: var(--font-raleway);
  margin-top: 100px;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 120px;
  @media (max-width: 992px) {
    grid-gap: 80px
    margin-top: 60px;
  }
  @media (max-width: 768px) {
    grid-gap: 20px;
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`;

const TabSelector = s.ul`
  padding: 0;
  padding-top: 40px;
  position: relative;
  @media (max-width: 768px ) {
    display: none;
  }
`;

const SelectSelector = s.select`
  appearance: none;
  background: white url(/public/img/select.svg) no-repeat 97% 50%;;
  background-size: 9px 14px;
  border-radius: 2px;
  border: none;
  outline: none;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  margin: 0 10px;
  color: var(--violet-accent);
  font-family: var(--font-montserrat);
  font-weight: 400;
  padding: 6px 16px;
  font-size: 1.25rem;
 @media (min-width: 769px ) {
   display: none;
 }
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
      position: relative;
      display: inline-block;
      &:after {
        content: '';
        display: block;
        background-color: var(--violet-light);
        height: .5rem;
        position: absolute;
        bottom: .5rem;
        z-index: -1;
        width: 100%;
      }
      @media (max-width: 992px) {
        font-size: 1.625rem;
        &:after {
          display: none;
        }
      }
      @media (max-width: 768px) {
        font-size: 1.375rem;
        }
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
      @media (max-width: 768px) {
        font-size: 1.125rem;
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

  renderOptions = options => {
    return options.map((option, i) => (
      <option key={option.title} value={i}>
        {option.title}
      </option>
    ));
  };

  handleSelectChange = e => {
    const selectedTab = e.target.value;
    console.log(selectedTab);
    this.setState({ selectedTab });
  };

  render() {
    return (
      <Container>
        <SelectSelector
          ref={select => (this.select = select)}
          onChange={this.handleSelectChange}
        >
          {this.renderOptions(skills)}
        </SelectSelector>
        <TabSelector>
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
        </TabSelector>
        <SkillPanel>
          <h2>{skills[this.state.selectedTab].title}</h2>
          <p>{skills[this.state.selectedTab].description}</p>
        </SkillPanel>
      </Container>
    );
  }
}

export default Skills;
