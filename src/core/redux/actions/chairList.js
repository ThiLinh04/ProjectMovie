import { createAction } from '.';
import { listChairs } from '../../Services/chair';

export const listChair = (id) => (dispatch) => {
  dispatch(createAction('SET_CHAIRLIST_REQUEST'));
  dispatch(createAction('SET_INFOR_REQUEST'));

  return listChairs(id)
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(
          createAction('SET_CHAIRLIST_FAILURE', { errors: 'data null' })
        );
        dispatch(createAction('SET_INFOR_FAILURE', { errors: 'data null' }));
        return;
      }
      dispatch(createAction('SET_CHAIRLIST_SUCCESS', data.danhSachGhe));
      dispatch(createAction('SET_INFOR_SUCCESS', data.thongTinPhim));
    })
    .catch((err) => {
      dispatch(createAction('SET_CHAIRLIST_FAILURE', err));
      dispatch(createAction('SET_INFOR_FAILURE', err));
    });
};

export const deleteChair = (maGhe) => (dispatch) => {
  dispatch(createAction('DELETE_CHAIR', maGhe));
};
