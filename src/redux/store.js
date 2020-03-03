import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import votingReducer from './reducers/votingReducer';
import favoritingReducer from './reducers/favoritingReducer';
import imageReducer from './reducers/imageReducer';

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  voting: votingReducer,
  favoriting: favoritingReducer,
  imaging: imageReducer
});

let store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
