import axios from 'axios';

export const informationCinema = () => {
  return axios({
    method: 'GET',
    url:
      'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap',
  });
};

export const getListCinemas = (id) => {
  return axios({
    method: 'GET',
    // url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`,
    // url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
  });
};

export const informationCinemaSystem = (id) => {
  return axios({
    method: 'GET',
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${id}&maNhom=GP01`,
  });
};

export const detailFilm = (id) => {
  return axios({
    method: 'GET',
    url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maCumRap=${id}&maNhom=GP01`,
    // "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1314",
  });
};
