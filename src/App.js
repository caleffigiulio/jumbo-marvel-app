import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './characterList.js';
import Main from './main.js';
import {
  BrowserRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Container className="pt-3">
        <a href="/" className="text-marvel h1 header">Jumbo Marvel App</a>
        <div className="py-5">
          <BrowserRouter>
            <Main/>
          </BrowserRouter>
        </div>
      </Container>
    )
  }
}

export default App;
