/* eslint-disable no-case-declarations */
const initialState = {
  loading: true,
  listCinema: [],
  cinemaSystem: [],
  listDetail: [],
  loadFirst: [],
  detailFilm: [],
  error: '',
};

const reducer = (state = initialState, { type, payload }) => {
  // console.log("payload", payload);
  switch (type) {
    case 'LIST_CINEMA_SUCCESS':
      const _cinemaSystems = payload || [];
      return {
        ...state,
        cinemaSystem: _cinemaSystems,
        loading: false,
        error: '',
      };

    case 'LIST_CINEMA_REQUEST':
      return { ...state, loading: true };
    case 'LIST_CINEMA_FAILURE':
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case 'LIST_LOGO_REQUEST':
      return { ...state, loading: true };
    case 'LIST_LOGO_SUCCESS':
      const _listCinema = payload || [];
      return {
        ...state,
        loading: false,
        error: null,
        listCinema: _listCinema,
      };

    case 'LIST_CINEMA_DETAIL_REQUEST':
      return { ...state, loading: true };
    case 'LIST_CINEMA_DETAIL_FAILURE':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'LIST_DETAIL_FILM':
      const _listDetail = payload || [];
      return {
        ...state,
        loading: false,
        error: null,
        listDetail: _listDetail,
      };
    case 'FIRST_LOAD':
      const _loadFirst = payload || [];
      return {
        ...state,
        loading: false,
        error: null,
        loadFirst: _loadFirst,
      };

    default:
      return state;
  }
};
export default reducer;
