import React, { Component } from 'react';
import './characterList.js';
import CharacterList from './characterList.js';
import CharacterDetail from './characterDetail.js';
import {
  Route
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: null
    };
  }

  componentDidMount() {
    fetch("https://gateway.marvel.com:443/v1/public/characters?&apikey=2b98cdfb6265c41152a598bb461ab0ca")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
         <div>
            <div className="App">
               <Route
                  exact path="/"
                  component={() => <CharacterList data={data} />}
                />
            </div>
            <div>
              {data.results.map(character => (
                <Route
                  path={"/character/" + character.id}
                  render={() => <CharacterDetail character={character} />}
                  key={character.id}
                />
              ))}
            </div>
         </div>
      );
    }
  }
}

export default App;
