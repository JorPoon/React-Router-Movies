import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Movie from './Movie'
import MovieCard from './MovieCard'
import axios from 'axios';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(response => {
        this.setState(() => ({ movies: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    console.log(this.state)
    return (
      <div className="movie-list">
        {this.state.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars, id } = movie;
  //console.log(movie)
  return (
    <Link to={`/movies/${id}`}>
    {/* <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div> */}
    <MovieCard
    title={title}
    director={director}
    metascore={metascore}
    stars={stars}
    />
  </Link>
  
  );
}
