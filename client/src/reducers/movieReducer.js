import {
    GET_MORE,
    GET_MOVIES
} from '../actions/types'

const initialState = {
    movies: []
}

export default function movieReducers(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload }
        case GET_MORE:
            return { ...state, movies: [...state.movies, ...action.payload] }
        default:
            return state;
    }
}