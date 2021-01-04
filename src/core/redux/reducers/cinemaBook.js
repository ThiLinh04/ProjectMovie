const initialState = {
  cinemas: [
    {
      maHeThongRap: 'BHDStar',
      tenHeThongRap: 'BHD Star Cineplex',
      biDanh: 'bhd-star-cineplex',
      logo: 'http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
    },
  ],
  id: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SELECT_CINEMA':
      return { ...state, cinemas: payload };

    default:
      return state;
  }
};
export default reducer;
