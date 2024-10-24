import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { vars } from "@rarla/themes";
import styled from "@emotion/styled";

function App() {
  return <View />;
}

export default App;

const View = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Text>
        Edit <code>src/App.tsx</code> and save to reload.
      </Text>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const Text = styled.div`
  color: ${vars.colors.$static.light.red[900]};
`;