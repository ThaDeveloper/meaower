import {
  POST_FAVORITE,
  POST_FAVORITE_SUCCESS,
  POST_FAVORITE_ERROR
} from './actionTypes';
import axios from 'axios';

const favoritesUrl = 'https://api.thecatapi.com/v1/favourites';

export const postFavorite = imageId => dispatch => {
  dispatch({
    type: POST_FAVORITE
  });
  const image = {
    image_id: imageId
  };
  axios
    .post(favoritesUrl, image)
    .then(() => {
      dispatch({
        type: POST_FAVORITE_SUCCESS
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
