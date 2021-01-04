/* eslint-disable no-useless-concat */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';

import {
  TableCell,
  TableRow,
  TableBody,
  TableContainer,
  Table,
  TableHead,
} from '@material-ui/core';
import { Button, Skeleton } from 'antd';
import { useDispatch } from 'react-redux';

import { deleteChair } from 'core/redux/actions/chairList';
import { bookTicketAction } from 'core/redux/actions/bookTicket';

const BookChair = (props) => {
  const dispatch = useDispatch();
  const { listBookChair, infoFilm, loading } = props;

  const deleteItem = (maGhe) => {
    dispatch(deleteChair(maGhe));
  };
  // hiển thị thông tin đặt vé
  const renderBookChair = () => {
    return listBookChair.map((item, index) => {
      return (
        <TableBody key={index}>
          <TableRow>
            <TableCell align="center">{index + 1}</TableCell>
            <TableCell align="center">{item.tenGhe}</TableCell>
            <TableCell align="center">{item.giaVe}</TableCell>
            <TableCell align="center">
              <Button className="huy" onClick={() => deleteItem(item.maGhe)}>
                Hủy
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      );
    });
  };

  // Tổng tiền vé
  const totalAmount = () => {
    let sum = 0;
    for (const item of props.listBookChair) {
      if (item !== 0) {
        sum += item.giaVe;
      }
    }
    // định dạng tiền
    sum = sum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
    return sum;
  };
  return (
    <div>
      <div className="payment">
        <div className="payment_content">
          <h3 className="total">{totalAmount()} VND</h3>
          <hr />

          <div className="content_item">
            <span>Phim: </span>
            <Skeleton
              loading={loading}
              paragraph={{ rows: 0 }}
              title={{ width: 300 }}
              active
            >
              <span>{infoFilm.tenPhim}</span>
            </Skeleton>
          </div>
          <hr />
          <div className="content_item">
            <span>Địa chỉ: </span>
            <Skeleton
              loading={loading}
              paragraph={{ rows: 0 }}
              title={{ width: 300 }}
              active
            >
              <span>{infoFilm.diaChi}</span>
            </Skeleton>
          </div>
          <hr />
          <div className="content_item">
            <span>Thời gian: </span>
            <Skeleton
              loading={loading}
              paragraph={{ rows: 0 }}
              title={{ width: 250 }}
              active
            >
              <span>
                {infoFilm.ngayChieu} - {infoFilm.gioChieu} - {infoFilm.tenRap}
              </span>
            </Skeleton>
          </div>

          <div style={{ marginTop: 30 }}>
            <TableContainer className="scroll__book">
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{ fontWeight: 600 }}>
                      STT
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: 600 }}>
                      Tên ghế
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: 600 }}>
                      Giá vé
                    </TableCell>
                    <TableCell align="center" style={{ fontWeight: 600 }} />
                  </TableRow>
                </TableHead>
                {renderBookChair()}
              </Table>
            </TableContainer>
          </div>

          <Button
            type="submit"
            className="button_pay"
            onClick={() => {
              if (localStorage.getItem('credential')) {
                // lấy ra userlogin từ local
                const userLogin = JSON.parse(
                  localStorage.getItem('credential')
                );

                // backend cần
                const objBookTicket = {
                  // props.match.params.maLichChieu :

                  maLichChieu: props.infoFilm.maLichChieu,
                  danhSachVe: listBookChair,
                  taiKhoanNguoiDung: userLogin.taiKhoan,
                };
                // console.log("ma", props.infoFilm.maLichChieu);
                document.getElementById('thongbao').innerHTML =
                  'Bạn chưa chọn ghế vui lòng chọn ghế!';
                for (const key in props.listBookChair) {
                  if (props.listBookChair[key].maGhe !== null) {
                    // dispatch
                    dispatch(bookTicketAction(objBookTicket));
                    document.getElementById('thongbao').innerHTML = '';
                  }
                }
              } else {
                props.history.push('/signin');
                // document.getElementById("thongbao").innerHTML =
                //   "Vui lòng đăng nhập";
              }
            }}
          >
            MUA VÉ
          </Button>
          <p
            id="thongbao"
            style={{
              color: 'red',
              fontSize: 20,
              marginLeft: 30,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookChair;

// const { listBookChair, infoFilm, loading } = props;
BookChair.propTypes = {
  loading: PropTypes.bool,

  infoFilm: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
  listBookChair: PropTypes.arrayOf(PropTypes.any),
};

BookChair.defaultProps = {
  loading: false,

  history: {},
  infoFilm: {},
  listBookChair: [],
};
