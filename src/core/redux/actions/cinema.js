import {
  getListCinemas,
  informationCinema,
  detailFilm,
} from 'core/Services/cinema';
import { createAction } from '.';

export const getListCinema = () => (dispatch) => {
  dispatch(createAction('LIST_LOGO_REQUEST'));
  return informationCinema()
    .then((res) => {
      dispatch(createAction('LIST_LOGO_SUCCESS', res.data));
    })
    .catch((err) => {
      dispatch(createAction('LIST_LOGO_FAILURE', err));
    });
};

export const getFirstLoad = (idBranch) => (dispatch) => {
  return dispatch(createAction('FIRST_LOAD', idBranch));
};

export const getHeThongRapId = (id) => (dispatch) => {
  // console.log("getHeThongRapId active");
  dispatch(createAction('LIST_CINEMA_REQUEST'));
  return getListCinemas(id)
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(createAction('LIST_CINEMA_FAILURE', { error: 'data null' }));

        return;
      }
      // console.log("data logo :", data);
      dispatch(createAction('LIST_CINEMA_SUCCESS', data));
    })
    .catch((err) => {
      // console.log(err);
      dispatch(createAction('LIST_CINEMA_FAILURE', err));
    });
};

export const listDetailFilm = (id) => (dispatch) => {
  dispatch(createAction('LIST_CINEMA_DETAIL_REQUEST'));
  return detailFilm(id)
    .then((res) => {
      // console.log("ss", id);
      // console.log("cumrap: ", res.data);
      const { data } = res;
      if (!data) {
        dispatch(
          createAction('LIST_CINEMA_DETAIL_FAILURE', { error: 'Data null' })
        );
        return;
      }

      dispatch(createAction('LIST_DETAIL_FILM', id));
    })
    .catch((err) => {
      dispatch(createAction('LIST_CINEMA_DETAIL_FAILURE', err));
    });
};
