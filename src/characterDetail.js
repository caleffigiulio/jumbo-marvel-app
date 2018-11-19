import React, { Component } from 'react';
import './breadCrumb.js'
import BreadCrumb from './breadCrumb.js';
import ComicsList from './comicsList.js';

/**
 * Takes in character object, upon mount, performs fetch request for comics associated with this character
 * displays details about character and loads and displays he comics returned from the request
 */
class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      comicData: null
    };
  }

  componentDidMount() {
    const url = this.props.character.comics.collectionURI.replace(/^http:\/\//i, 'https://') + "?apikey=2b98cdfb6265c41152a598bb461ab0ca";
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            comicData: result.data
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
    const { error, isLoaded, comicData } = this.state;
    const name = this.props.character.name ? this.props.character.name : "[Unknown]";
    const description = this.props.character.description ? this.props.character.description : "No Description provided - It seems this character prefers to keep an air of mystery around them.";
    const imageURL = this.props.character.thumbnail.path.replace(/^http:\/\//i, 'https://') + "/landscape_incredible." + this.props.character.thumbnail.extension;
    const detailURL = this.props.character.urls[0].url.replace(/^http:\/\//i, 'https://') + "?apikey=2b98cdfb6265c41152a598bb461ab0ca";
    return (
      <div>
        <BreadCrumb pageName={name}/>
        <div className="text-center">
          <img className='img-fluid' src={imageURL} alt={name + " banner image"}/>
          <h1>{name}</h1>
          <hr></hr>
        </div>
        <p>{description}</p>
        <a href={detailURL}>Learn More At the Official Marvel Website</a>
        <div className="py-4">
          <h5>Featured Comics</h5>
          <ComicsList data={comicData} error={error} isLoaded={isLoaded}/>
        </div>
      </div>
    );
  }
}

export default CharacterDetail;
