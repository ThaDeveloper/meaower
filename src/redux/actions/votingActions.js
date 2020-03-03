import axios from 'axios';
import {
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_ERROR,
  POST_VOTE,
  POST_VOTE_SUCCESS,
  POST_VOTE_ERROR
} from './actionTypes';

const imageUrl = 'https://api.thecatapi.com/v1/images/search';
const votesUrl = 'https://api.thecatapi.com/v1/votes';
const apiKey = 'd3cd1032-2080-4458-91f3-007d2a53a528';
axios.defaults.headers = {
  'Content-Type': 'application/json',
  'x-api-key': apiKey
};

export const getImage = () => dispatch => {
  dispatch({
    type: IMAGE_REQUEST
  });
  axios
    .get(imageUrl)
    .then(res => {
      dispatch({
        type: IMAGE_SUCCESS,
        payload: res.data[0]
      });
      console.log(res.data[0]);
    })
    .catch(err => {
      dispatch({
        type: IMAGE_ERROR,
        payload: 'Resquest failed,try reloading'
      });
      console.log(err);
    });
};

export const postVote = (image, value) => dispatch => {
  const body = {
    image_id: image.id,
    value: value
  };
  dispatch({
    type: POST_VOTE
  });
  axios
    .post(votesUrl, body)
    .then(() => {
      dispatch({
        type: POST_VOTE_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: POST_VOTE_ERROR,
        payload: 'Resquest failed,try reloading'
      });
      console.log(err);
    });
};
