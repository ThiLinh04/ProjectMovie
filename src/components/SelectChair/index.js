/* eslint-disable react/button-has-type */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';

import { useDispatch } from 'react-redux';
import { BookChairContainer } from 'containers';

// import Swal from 'sweetalert2';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const SelectChair = (props) => {
  const {
    listBookChair,
    listChairs,
    infoFilm,
    loading,
    initialMinute = 0,
    initialSeconds = 0,
  } = props;
  const dispatch = useDispatch();

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  // loading icons
  const antIconLoading = <LoadingOutlined style={{ fontSize: 50 }} spin />;

  const handleChoseChair = (ghe) => {
    dispatch({
      type: 'CHOOSE_CHAIR',
      payload: ghe,
    });
  };

  const renderChair = () => {
    if (loading) return <Spin indicator={antIconLoading} />;
    return listChairs.map((ghe, index) => {
      let cssGhe = '';
      let disabled = false;
      if (ghe.loaiGhe === 'Vip') {
        cssGhe = 'cssGheVip';
      }
      if (ghe.daDat) {
        cssGhe = 'cssGheDaDat';
        disabled = true;
      }
      const indexGheDangDat = listBookChair.findIndex(
        (gheDangDat) => gheDangDat.maGhe === ghe.maGhe
      );
      if (indexGheDangDat !== -1) {
        cssGhe = 'cssGheDangChon';
      }

      return (
        <>
          <button
            id="chon_Ghe"
            disabled={disabled}
            className={`ghe ${cssGhe}`}
            key={index}
            onClick={() => {
              handleChoseChair(ghe);
            }}
          >
            {ghe.tenGhe}
          </button>
          {/* Mỗi hàng có 16 ghế */}
          {(index + 1) % 16 === 0 ? <br /> : ''}
        </>
      );
    });
  };

  // const timeOut = () => {
  //   props.history.push('/');
  // };

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
      // if (seconds === 0 && minutes === 0) {
      //   Swal.fire("Thông báo", "Hết thời gian đặt vé", "success");
      //   setTimeout(timeOut, 1500);
      // }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div>
      <div className="container__chair">
        <div className="item select__chair">
          <div className="select__chair__header">
            <div className="header__cinema">
              <p>Rạp đang chọn</p>
              <h4>{infoFilm.tenRap}</h4>
            </div>
            <div className="header__time">
              <p>Thời gian giữ ghế</p>
              <>
                {minutes === 0 && seconds === 0 ? null : (
                  <h4>
                    {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                  </h4>
                )}
              </>
            </div>
          </div>
          <div className="select__chair__screens">
            <div className="screens__name">
              <img src="/image/screen.png" alt="" />
            </div>
            <div className="screens_chairlist">
              <div className="render__chair">{renderChair()}</div>
            </div>
          </div>
          <div className="select__chair__note">
            <span className="note__item">
              <EventSeatRoundedIcon
                className="note__item__chair"
                style={{ color: 'gray' }}
              />
              <span className="note__item__content">Ghế thường</span>
            </span>
            <span className="note__item">
              <EventSeatRoundedIcon
                className="chair_item"
                style={{ color: 'green' }}
              />
              <span className="note__item__content">Ghế đang chọn</span>
            </span>
            <span className="note_item">
              <EventSeatRoundedIcon
                className="chair_item"
                style={{ color: 'red' }}
              />
              <span className="note__item__content">Đã có người chọn</span>
            </span>
          </div>
        </div>
        <div className="item book__chair">
          <BookChairContainer {...props} />
        </div>
      </div>
    </div>
  );
};

export default SelectChair;

// const { listBookChair, listChairs, infoFilm, loading } = props;
SelectChair.propTypes = {
  loading: PropTypes.bool,

  initialMinute: PropTypes.number,
  initialSeconds: PropTypes.number,

  infoFilm: PropTypes.objectOf(PropTypes.any),
  listChairs: PropTypes.arrayOf(PropTypes.any),
  listBookChair: PropTypes.arrayOf(PropTypes.any),
};

SelectChair.defaultProps = {
  loading: false,

  initialMinute: 0,
  initialSeconds: 0,

  infoFilm: {},
  listChairs: [],
  listBookChair: [],
};
