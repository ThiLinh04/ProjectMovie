/* eslint-disable no-undef */
import axios from 'axios';

export const listChairs = (id) => {
  return axios({
    method: 'GET',
    // 18529
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
  });
};

export const bookTicket = (thongTinVe) => {
  return axios({
    method: 'POST',
    url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
    data: thongTinVe,
    // định danh đăng nhập
    headers: { Authorization: `Bearer ${localStorage.getItem('t')}` },
  });
};
