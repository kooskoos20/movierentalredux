import {FETCH_MOVIES} from '../actions/type.js'

const intialState = {
    movies: [{imageUrl : 'fdasf',name:'test',snippet:'fsadfasfadsff asdfgasdg sadgsadgadsg'}]

}


export default function(state = intialState, action){

    switch(action.type){
        case FETCH_MOVIES : 
        console.log(action.payload)
        console.log(state);
            return {
                //...state,
                movies : action.payload
                
            }
        default:
        return state;
    }

}