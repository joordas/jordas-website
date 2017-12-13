import React from "react";
import { render } from "react-dom";

// importing components:
import Homepage from "./pages/Homepage";

const App = () => (
  <div>
    <Homepage />
  </div>
);

const rootElement = document.getElementById("root");

if (rootElement) {
  render(<App />, rootElement);
}
