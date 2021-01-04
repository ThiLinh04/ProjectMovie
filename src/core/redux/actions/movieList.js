import { movieList, getDetailFilm } from 'core/Services/movie';
import { createAction } from '.';

export const movieListData = () => (dispatch) => {
  dispatch(createAction('SET_MOVIELIST_REQUEST'));
  return movieList()
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(
          createAction('SET_MOVIELIST_FAILURE', { errors: 'Data null' })
        );
        return;
      }
      // console.log(res);
      dispatch(createAction('SET_MOVIELIST_SUCCESS', res.data));
    })
    .catch((err) => {
      // console.log(err);
      dispatch(createAction('SET_MOVIELIST_FAILURE', err));
    });
};

export const onChangeTrailer = (trailer) => (dispatch) => {
  // console.log("Trailer: ", trailer);
  dispatch(createAction('SET_TRAILER', trailer));
};

export const flimDetail = (idMovie) => (dispatch) => {
  dispatch(createAction('DETAIL_FLIM_REQUEST'));
  return getDetailFilm(idMovie)
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(createAction('DETAIL_FLIM_FAILURE', { error: 'Data null' }));
        return;
      }
      dispatch(createAction('DETAIL_FLIM_SUCCESS', data));
    })
    .catch((err) => {
      dispatch(createAction('DETAIL_FLIM_FAILURE', err));
    });
};
