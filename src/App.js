import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const axios = require("axios")
const fs = require('fs')

const baseURL = "https://gateway.marvel.com"
const api_key = "2b98cdfb6265c41152a598bb461ab0ca"

axios.get(baseURL + "/443/v1/public/characters?apikey=" + api_key).then((result) => {
  var characters = result.data
  fs.writeFileSync(`./src/data/characters.json`, JSON.stringify(characters, ``, 2))
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
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
  }
}

export default App;
