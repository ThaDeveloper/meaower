import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import votingReducer from './reducers/votingReducer';
import favoritingReducer from './reducers/favoritingReducer';

const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
  voting: votingReducer,
  favoriting: favoritingReducer
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
