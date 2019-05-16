import axios from 'axios';

export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const actionHandler = () => dispatch => {
  axios
    .get(`https://swapi.co/api/people/`)
    .then(res=> dispatch({ type: FETCH_SUCCESS, payload:res.data.results }))
    .catch(err => dispatch({type:FETCH_ERROR,payload:err}))
}