/* eslint-disable no-case-declarations */
const initialState = {
  listNameMovie: [],
  loading: false,
  codeFilm: null,

  infoMovieTheater: {},
  systemTheater: [
    // heThongRapChieu === systemTheater
    {
      cumRapChieu: [
        {
          maCumRap: 'default',
          tenCumRap: 'Vui lòng chọn phim',
          lichChieuPhim: [
            {
              maLichChieu: 'default',
              ngayChieuGioChieu: 'Vui lòng chọn phim và rạp',
            },
          ],
        },
      ],
    },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // getlistmovie
    case 'GET_LIST_MOVIE_REQUEST':
      return { ...state, loading: true };
    case 'GET_LIST_MOVIE_SUCCESS':
      return {
        ...state,
        listNameMovie: payload,
        loading: false,
      };
    case 'GET_LIST_MOVIE_FAILURE':
      return { ...state, loading: true };

    // code film
    case 'CODE_FILM_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'CODE_FILM_SUCCESS':
      return {
        ...state,
        loading: false,
        codeFilm: payload,
      };
    case 'CODE_FILM_FAILURE':
      return {
        ...state,
        loading: false,
      };

    // search detail film
    case 'SEARCH_DETAIL_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SEARCH_DETAIL_SUCCESS':
      // console.log("payload ", payload);
      const _systemTheater = payload.heThongRapChieu || []; // kiểm tra object

      return {
        ...state,
        systemTheater: _systemTheater,
        loading: false,
      };
    case 'SEARCH_DETAIL_FAILURE':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
export default reducer;
