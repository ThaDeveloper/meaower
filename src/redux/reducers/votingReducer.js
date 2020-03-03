import {
  IMAGE_REQUEST,
  IMAGE_SUCCESS,
  IMAGE_ERROR,
  POST_VOTE,
  POST_VOTE_SUCCESS,
  POST_VOTE_ERROR
} from '../actions/actionTypes';

const initialState = {
  image: {},
  loading: false,
  errors: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case IMAGE_REQUEST:
      return {
        ...state,
        loading: true,
        errors: false
      };
    case IMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload
      };
    case IMAGE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    case POST_VOTE:
      return {
        ...state,
        loading: true,
        errors: false
      };
    case POST_VOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false
      };
    case POST_VOTE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
