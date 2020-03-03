import {
  POST_FAVORITE,
  POST_FAVORITE_SUCCESS,
  POST_FAVORITE_ERROR
} from '../actions/actionTypes';

const intialState = {
  loading: false,
  errors: false
};

export default (state = intialState, action) => {
  switch (action.type) {
    case POST_FAVORITE:
      return {
        ...state,
        loading: true,
        errors: false
      };
    case POST_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: false
      };
    case POST_FAVORITE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
