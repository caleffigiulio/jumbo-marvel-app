import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {
  Link,
} from "react-router-dom";

class CharacterList extends Component {
  render() {
      return (
          <div>
            <h2>Character List</h2>
            <hr></hr>
            <Row>
              {this.props.data.results.map(character => (
                <Col xs="6" sm="6" md="4" lg="3" className="py-3 character-thumbnail" key={character.id}>
                  <Link to={"/character/" + character.id}>
                      <img className="box-shadow img-fluid mb-3" src={character.thumbnail.path.replace(/^http:\/\//i, 'https://') + "/standard_xlarge." + character.thumbnail.extension} alt={character.name + " thumbnail image"}/>
                      <h4>{character.name}</h4>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
      );
  }
}

export default CharacterList;
