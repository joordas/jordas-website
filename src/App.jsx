import React from "react";
import { render } from "react-dom";
import s from "styled-components";

// importing components:
import Homepage from "./pages/Homepage";

const Illustration = s.img`
  position: absolute;
  width: 100vw;
  // height: 100vh;
  // max-height: 250vh;
  z-index: -1;
  overflow-y: hidden;
`;

const App = () => (
  <div>
    <Illustration src="/public/img/three.svg" />
    <Homepage />
  </div>
);

const rootElement = document.getElementById("root");

if (rootElement) {
  render(<App />, rootElement);
}
