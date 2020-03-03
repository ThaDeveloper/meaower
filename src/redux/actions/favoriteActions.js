import {
  POST_FAVORITE,
  POST_FAVORITE_SUCCESS,
  POST_FAVORITE_ERROR
} from './actionTypes';
import axios from 'axios';

const favoritesUrl = 'https://api.thecatapi.com/v1/favourites';

export const postFavorite = image => dispatch => {
  dispatch({
    type: POST_FAVORITE
  });
  const body = {
    image_id: image.id
  };
  axios
    .post(favoritesUrl, body)
    .then(() => {
      dispatch({
        type: POST_FAVORITE_SUCCESS,
        payload: image
      });
    })
    .catch(err => {
      dispatch({
        type: POST_FAVORITE_ERROR,
        payload: 'An error occured, please retry'
      });
      console.log(err);
    });
};
