import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

   toHome = (e) => {
    e.preventDefault();
    this.props.history.push('/');
  }

  render() {
    console.log(this.props)
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <button onClick={this.toHome} className="home-button">Home</button>
      </div>
    );
  }
}
