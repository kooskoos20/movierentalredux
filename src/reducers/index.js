import {combineReducers} from 'redux'
import movieFetchReducer from './movieFetchReducer'

console.log("here")
//console.log(movieFetchReducer())

export default combineReducers({
    movieFetch : movieFetchReducer
});