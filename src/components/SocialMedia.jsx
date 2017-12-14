import React from "react";
import s from "styled-components";

import FacebookIcon from "react-icons/lib/fa/facebook-official";
import GithubIcon from "react-icons/lib/fa/github";
import LinkedinIcon from "react-icons/lib/fa/linkedin";

const Wrapper = s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  a {
    transition: .2s all ease-in;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const SocialMedia = props => (
  <Wrapper>
    <a target="_blank" href="https://github.com/joordas">
      <GithubIcon color={props.color} size={props.size} />
    </a>
    <a target="_blank" href="https://www.linkedin.com/in/jordan-gomes/">
      <LinkedinIcon color={props.color} size={props.size} />
    </a>
    <a target="_blank" href="https://www.facebook.com/joordas">
      <FacebookIcon color={props.color} size={props.size} />
    </a>
  </Wrapper>
);

export default SocialMedia;
