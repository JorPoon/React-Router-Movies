import React, { Component } from 'react';
import {Router, Route} from "react-router-dom"
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    !savedList.includes(movie)? savedList.push(movie) : savedList.pop(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <Route path='/' render= { props => <SavedList list={this.state.savedList} {...props} />}/> 
        <Route path='/'  exact component={MovieList} />
        <Route path='/movies/:id' exact render={ props => <Movie addToSavedList={this.addToSavedList} {...props}/>}  />
      </div>
    );
  }
  // render() {
  //   return (
  //     <div>
  //       <Route
  //         render={props => <SavedList list={this.state.savedList} {...props} />}
  //       />
  //       <Route exact path="/" component={MovieList} />
  //       <Route
  //         path="/movies/:id"
  //         render={props => (
  //           <Movie {...props} addToSavedList={this.addToSavedList} />
  //         )}
  //       />
  //     </div>
  //   );
  // }
}
