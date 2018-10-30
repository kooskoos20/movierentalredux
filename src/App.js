import React, { Component } from 'react';
import './App.css';
import MovieInfo from './Components/movieaInfo'
import {Provider} from 'react-redux'
import store from './store.js'





class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
          <MovieInfo />
      </div>
      </Provider>
    );
  }
}

export default App;
