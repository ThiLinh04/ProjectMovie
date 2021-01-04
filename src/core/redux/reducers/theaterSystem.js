const initialState = {
  heThongRap: [],
  cumRap: [],
  id: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'RENDER_CUM_RAP':
      return { ...state, cumRap: payload };
    case 'RENDER_LICH_CHIEU_PHIM':
      return { ...state, id: payload };
    default:
      return state;
  }
};

export default reducer;
