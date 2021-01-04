const initialState = {
  listChairs: [],
  infoFilm: [],
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // chair
    case 'SET_CHAIRLIST_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SET_CHAIRLIST_SUCCESS':
      return {
        ...state,
        listChairs: payload,
        loading: false,
      };
    case 'SET_CHAIRLIST_FAILURE':
      return {
        ...state,
        loading: false,
      };

    // infor chair
    case 'SET_INFOR_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SET_INFOR_SUCCESS':
      return {
        ...state,
        infoFilm: payload,
        loading: false,
      };
    case 'SET_INFOR_FAILURE':
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
