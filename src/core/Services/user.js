import axios from 'axios';

export const signUp = (data) => {
  return axios({
    method: 'POST',
    url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
    data,
  });
};
export const signIn = (user) => {
  return axios({
    method: 'POST',
    url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
    data: user,
  });
};
