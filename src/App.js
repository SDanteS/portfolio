import React, { Component } from "react";
import Header from "./components/Header";
import Container from "./components/Container";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Header />
          <Routes />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
