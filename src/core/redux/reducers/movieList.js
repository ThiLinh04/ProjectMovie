/* eslint-disable no-case-declarations */
const initialState = {
  movieList: [],
  trailer: '',
  loading: false,
  detailFilm: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // movielist
    case 'SET_MOVIELIST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SET_MOVIELIST_SUCCESS':
      return {
        ...state,
        movieList: payload,
        loading: false,
      };
    case 'SET_MOVIELIST_FAILURE':
      return {
        ...state,
        loading: false,
      };

    // trailer movie
    case 'SET_TRAILER':
      return { ...state, trailer: payload };

    // movie detail
    case 'DETAIL_FLIM_REQUEST':
      return { ...state, loading: true };
    case 'DETAIL_FLIM_FAILURE':
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case 'DETAIL_FLIM_SUCCESS':
      // console.log('detail a flim', payload)
      const _detailFilm = payload || [];
      return {
        ...state,
        loading: false,
        error: null,
        detailFilm: _detailFilm,
      };

    default:
      return state;
  }
};
export default reducer;
