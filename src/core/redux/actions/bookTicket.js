/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { createAction } from '.';
import { bookTicket } from '../../Services/chair';
import { listChair } from './chairList';

export const bookTicketAction = (thongTinVe) => (dispatch) => {
  dispatch(createAction('BOOK_TICKET_REQUEST'));
  return bookTicket(thongTinVe)
    .then((res) => {
      const { data } = res;
      if (!data) {
        dispatch(createAction('BOOK_TICKET_FAILURE', { errors: 'Data null' }));
        return;
      }
      dispatch(createAction('BOOK_TICKET_SUCCESS'));
      dispatch(listChair(thongTinVe.maLichChieu));

      // Swal.fire("Thông báo", "Đặt vé thành công", "success");
    })
    .catch((err) => {
      dispatch(createAction('BOOK_TICKET_FAILURE', { errors: 'Data null' }));
      // Swal.fire("Thông báo", "Đặt vé thất bại", "errors");
    });
};
