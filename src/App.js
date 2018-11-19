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
      <div>
        <Container className="pt-3">
          <a href="/" className="text-marvel h1 header">Jumbo Marvel App</a>
          <br></br>
          <small className='text-dark'>Built By Giulio Deane-Caleffi - Data provided by Marvel. © 2014 Marvel </small>
          <br></br>
          <a href="https://github.com/caleffigiulio/jumbo-marvel-app"><small className='text-dark'>https://github.com/caleffigiulio/jumbo-marvel-app</small></a>
          <div className="py-3">
            <BrowserRouter>
              <Main/>
            </BrowserRouter>
          </div>
        </Container>
      </div>
    )
  }
}

export default App;
