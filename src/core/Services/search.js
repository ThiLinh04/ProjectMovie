import axios from 'axios';

export const searchMovie = (id) => {
  return axios({
    method: 'GET',
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${id}`,
  });
};
export const getListMovie = () => {
  return axios({
    method: 'GET',
    url:
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
  });
};

export const searchDetail = (id) => {
  return axios({
    method: 'GET',
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
  });
};
