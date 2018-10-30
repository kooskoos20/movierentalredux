import React, { Component } from 'react'
import {connect} from 'react-redux';
import {fetchMovies} from '../actions/moviesActions.js'

class MovieInfo extends Component {
componentDidMount(){
    this.props.fetchMovies();

}

    render() { 

        let movies = null;

        if(this.props.movies!==undefined)
        {
        console.log(this.props.movies)
        movies = this.props.movies.map(movie => (
            <div key={this.props.movies.indexOf(movie)}>
                <h1>{movie.name}</h1>
                <p>{movie.snippet}</p>
            </div>
        ))
        }

        else{
            movies = <h1>unable to load</h1>
        }
        
        return ( 
            <div>
                
                {movies}
            </div>
         );
    }

    
}

const mapStatesToProps = state => ({
    movies : state.movieFetch.movies
}
);
 
export default connect(mapStatesToProps,{fetchMovies})(MovieInfo);