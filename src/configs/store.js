/* eslint-disable no-undef */
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import UserReducer from 'core/redux/reducers/user';
import movie from 'core/redux/reducers/movieList';
import chair from 'core/redux/reducers/listChair';
import listBookChair from 'core/redux/reducers/listBookChair';

import cinema from 'core/redux/reducers/cinema';
import reducerSystem from 'core/redux/reducers/theaterSystem';
import cinemaBook from 'core/redux/reducers/cinemaBook';
import search from 'core/redux/reducers/searchReducer';

const reducer = combineReducers({
  user: UserReducer,
  movie,
  chair,
  listBookChair,
  cinema,
  reducerSystem,
  cinemaBook,
  search,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
