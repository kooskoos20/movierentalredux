import {FETCH_MOVIES} from './type';

export function fetchMovies() {
    return function(dispatch){
        console.log("fetched")
        
        fetch("https://movie-rental-51a59.firebaseio.com/movies.json")
        .then(res => res.json())
        .then(data => dispatch({
            type : FETCH_MOVIES,
            payload : data}
        ));

    }
}