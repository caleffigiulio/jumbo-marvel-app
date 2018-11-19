import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class ComicsList extends Component {
  render() {
    if (this.props.error) {
      return <div>Error: {this.props.error.message}</div>;
    } else if (!this.props.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <Row className="text-center">
            {this.props.data.results.map(comic => (
              <Col sm="12" md="6" lg="4" className="py-3" key={comic.id}>
                  <img className="box-shadow hover-float mb-3" src={(comic.thumbnail.path.replace(/^http:\/\//i, 'https://')) + "/portrait_xlarge." + comic.thumbnail.extension} alt={comic.title + " thumbnail image"}/>
                  <h5 class="p">{comic.title}</h5>
                  <a href={comic.urls[0].url}>Read Now</a>
              </Col>
            ))}
          </Row>
      );
    }
  }
}
export default ComicsList;
