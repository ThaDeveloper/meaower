import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_ERROR
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  errors: false,
  images: [],
  totalResults: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        loading: true,
        errors: false
      };
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.payload,
        totalResults: action.payload.length
      };
    case GET_IMAGES_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
