/* eslint-disable no-case-declarations */
const initialState = {
  // thongTinDangNhap: null,

  loading: false,
  isAuthenticated: false,
  user_info: {
    user_name: '',
    full_name: '',
    email: '',
    phone: '',
    group_id: '',
  },
  token: {
    access_token: '',
  },
  errors: null,
  error_signup: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // signin
    case 'SIGN_IN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SIGN_IN_SUCCESS':
      const { accessToken, email, hoTen, maNhom, soDT, taiKhoan } =
        payload || {};

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        errors: null,
        user_info: {
          email: email || '',
          full_name: hoTen || '',
          group_id: maNhom || '',
          phone: soDT || '',
          user_name: taiKhoan || '',
        },
        token: {
          accessToken,
        },
      };
    case 'SIGN_IN_FAILURE':
      // console.log('payload', payload);
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        errors: payload.errors,
      };

    // signout
    case 'SIGN_OUT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SIGN_OUT_SUCCESS':
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
      };
    case 'SIGN_OUT_FAILURE':
      return {
        ...state,
        loading: false,
      };

    // signup
    case 'SIGN_UP_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'SIGN_UP_SUCCESS':
      // const { email, hoTen, maNhom, soDT, taiKhoan } = payload || {};
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user_info: {
          email: payload.email || '',
          full_name: payload.hoTen || '',
          group_id: payload.maNhom || '',
          phone: payload.soDT || '',
          user_name: payload.taiKhoan || '',
        },
      };
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        loading: false,
        error_signup: payload.errors,
      };

    default:
      return state;
  }
};
export default reducer;
