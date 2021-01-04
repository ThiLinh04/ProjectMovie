import axios from 'axios';

export const movieList = () => {
  return axios({
    method: 'GET',
    url:
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
  });
};

export const getDetailFilm = (idMovie) => {
  return axios({
    method: 'GET',
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idMovie}`,
  });
};
