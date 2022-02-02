import axios from 'axios'
import { baseUri } from "../baseUri/baseUri";
import {
    GET_MORE,
    GET_MOVIES
} from './types'

export const getMovies = (search, type) => async dispatch => {
    let params = [0, search, type]
    await axios.get(`${baseUri}/${JSON.stringify(params)}`)
        .then(res => {
            dispatch({
                type: GET_MOVIES,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const rateMovie = (data) => dispatch => {
    dispatch({
        type: GET_MOVIES,
        payload: data
    })
}

export const getMore = (data) => async dispatch => {
    console.log(data)
    await axios.get(`${baseUri}/${JSON.stringify(data)}`)
    .then(res => {
        dispatch({
            type: GET_MORE,
            payload: res.data
        })
    })
    .catch(err => console.log(err))

}