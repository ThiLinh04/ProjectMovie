import { searchMovie, getListMovie, searchDetail } from 'core/Services/search';
import { createAction } from '.';

export const searchMovieId = (id) => (dispatch) => {
  dispatch(createAction('CODE_FILM_REQUEST'));
  return searchMovie(id)
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(createAction('CODE_FILM_FAILURE', { errors: 'Data null' }));
        return;
      }
      dispatch(createAction('CODE_FILM_SUCCESS', id));
    })
    .catch((err) => {
      dispatch(createAction('CODE_FILM_FAILURE', err));
    });
};

export const getListMovies = () => (dispatch) => {
  dispatch(createAction('GET_LIST_MOVIE_REQUEST'));
  return getListMovie()
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(
          createAction('GET_LIST_MOVIE_FAILURE', { errors: 'Data null' })
        );
        return;
      }
      dispatch(createAction('GET_LIST_MOVIE_SUCCESS', res.data));
    })
    .catch((err) => {
      createAction('GET_LIST_MOVIE_FAILURE', err);
    });
};

export const searchDetails = (id) => (dispatch) => {
  dispatch(createAction('SEARCH_DETAIL_REQUEST'));
  return searchDetail(id)
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(
          createAction('SEARCH_DETAIL_FAILURE', { errors: 'Data null' })
        );
        return;
      }
      dispatch(createAction('SEARCH_DETAIL_SUCCESS', data));
    })
    .catch((err) => {
      dispatch(createAction('SEARCH_DETAIL_FAILURE', err));
    });
};
