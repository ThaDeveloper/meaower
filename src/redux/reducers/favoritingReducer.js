import {
  POST_FAVORITE,
  POST_FAVORITE_SUCCESS,
  POST_FAVORITE_ERROR
} from '../actions/actionTypes';

const intialState = {
  loading: false,
  errors: false,
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
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
      const fav =
        state.favorites.findIndex(img => img.id === action.payload.id) >= 0;
      if (fav) {
        return {
          ...state,
          favorites: state.favorites.filter(img => img.id !== action.payload.id)
        };
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
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
