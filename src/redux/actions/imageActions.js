import axios from 'axios';
import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR
} from './actionTypes';

const imagesUrl = 'https://api.thecatapi.com/v1/images/search';

export const getImages = () => dispatch => {
  dispatch({ type: GET_IMAGES });
  axios
    .get(imagesUrl, {
      params: {
        limit: 45
      }
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_IMAGES_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_IMAGES_ERROR,
        payload: 'An error occured, please retry'
      });
    });
};
