import axios from 'axios';
export const GET_DATA = "GET_DATA";
export const UPDATE_DATA = "UPDATE_DATA"
export const SET_ERROR = "SET_ERROR"

export const getData = () => dispatch => {
  dispatch({ type: GET_DATA });
  axios
    .get('https://api.covid19api.com/summary')
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_DATA, payload: res.data })
    })
    .catch(err => {
      console.log('Error fetching data', err);
      dispatch({ type: SET_ERROR, payload: 'Error fetching data from api'})
    })
};