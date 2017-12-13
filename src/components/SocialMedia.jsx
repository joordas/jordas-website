import React from "react";
import s from "styled-components";

import FacebookIcon from "react-icons/lib/fa/facebook-official";
import GithubIcon from "react-icons/lib/fa/github";
import LinkedinIcon from "react-icons/lib/fa/linkedin";

const Wrapper = s.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const SocialMedia = props => (
  <Wrapper>
    <a href="#">
      <GithubIcon color={props.color} size={props.size} />
    </a>
    <a href="#">
      <LinkedinIcon color={props.color} size={props.size} />
    </a>
    <a href="#">
      <FacebookIcon color={props.color} size={props.size} />
    </a>
  </Wrapper>
);

export default SocialMedia;
