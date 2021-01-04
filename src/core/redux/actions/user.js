/* eslint-disable no-undef */
import { createAction } from '.';
import { signIn, signUp } from '../../Services/user';

export const login = (user, redirect) => (dispatch) => {
  dispatch(createAction('SIGN_IN_REQUEST'));
  return signIn(user)
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(
          createAction('SIGN_IN_FAILURE', {
            errors: 'Tài khoản hoặc mật khẩu không đúng!',
          })
        );
        return;
      }

      dispatch(createAction('SIGN_IN_SUCCESS', data));
      if (redirect) redirect();
      // lưu xuống localstorage
      localStorage.setItem('credential', JSON.stringify(data));
    })
    .catch(() => {
      dispatch(
        createAction('SIGN_IN_FAILURE', {
          errors: 'Tài khoản hoặc mật khẩu không đúng!',
        })
      );
    });
};

export const signUpUser = (dataSignIn, redirect) => (dispatch) => {
  dispatch(createAction('SIGN_UP_REQUEST'));
  return signUp(dataSignIn)
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(
          createAction('SIGN_UP_FAILURE', {
            errors: res.response,
          })
        );
        // console.log(res.response);
        return;
      }
      dispatch(createAction('SIGN_UP_SUCCESS', data));
      // lưu xuống localstorage
      localStorage.setItem('credential', JSON.stringify(data));

      // go back
      if (redirect) redirect();
    })
    .catch((err) => {
      dispatch(
        createAction('SIGN_UP_FAILURE', {
          errors: err.response.data,
        })
      );
      // console.log("err", err.response.data);
    });
};
export const signOut = (redirect) => (dispatch) => {
  dispatch(createAction('SIGN_OUT_SUCCESS'));
  localStorage.removeItem('credential');
  // goBack()
  if (redirect) redirect();
};
