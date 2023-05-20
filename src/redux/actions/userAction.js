import axios from 'axios';
import { ActionTypes } from '../constants/actiontypes';

const dataFetch = data => ({
  type: ActionTypes.FETCH_ALL_DATA,
  data,
});

export const fetchDataAll = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      dispatch(dataFetch(response.data));
    })
    console.log(data,"DATA")
}