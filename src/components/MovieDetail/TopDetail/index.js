import React from 'react';
import PropTypes from 'prop-types';

import { Progress, Rate } from 'antd';

import useWindowSize from 'components/common/hooks/useWindowSize';
import MovieDetailLoader from '../../Loaders/MovieDetailLoader';

const TopDetail = (props) => {
  const { detailFilm, loading } = props;
  const size = useWindowSize();

  const windowMode = size.width && size.width >= 1024;

  const getDateFlim = () => {
    const dateParse = new Date(detailFilm.ngayKhoiChieu);

    return `${dateParse.getDate()}.${
      dateParse.getMonth() + 1
    }.${dateParse.getFullYear()}`;
  };

  const getTimeFlim = () => {
    return detailFilm.lichChieu && detailFilm.lichChieu.length > 0
      ? detailFilm.lichChieu.slice(0, 1)[0].thoiLuong
      : 'Loading time...';
  };

  const getInfoFlim = () => {
    const ageType = ['C18', 'C13', 'P'];
    const random = Math.floor(Math.random() * ageType.length);

    return [
      {
        dateLaunch: getDateFlim(),
        nameFlim: detailFilm.tenPhim,
        ageType: ageType[random],
        timeFlim: `${getTimeFlim()} phút - 0 IMDb - Tiếng Nhật`,
      },
    ];
  };
  if (loading) return <MovieDetailLoader />;

  return (
    <div className="top__content">
      <div className="top__content__background--blur" />
      <div
        className="top__content__background"
        style={{ backgroundImage: `url(${detailFilm.hinhAnh})` }}
      />

      <div className="top__content__detail">
        <div className="detail__img">
          <img src={detailFilm.hinhAnh} alt="" />
        </div>
        {getInfoFlim().map((item) => {
          return (
            <div className="detail__name">
              <div className="detail__name__date">{item.dateLaunch}</div>
              <div className="detail__name__title">
                <span>{item.ageType}</span>
                {item.nameFlim}
              </div>
              <div className="detail__name__time">{item.timeFlim}</div>
              <div className="detail__name__btnMV">
                <span>MUA VÉ</span>
              </div>
            </div>
          );
        })}

        <div className="detail__rate">
          <div className="detail__rate__circle">
            <Progress
              type="circle"
              status="success"
              percent={detailFilm.danhGia * 10}
              format={(percent) =>
                `${percent === 100 ? 'GREAT' : percent < 50 ? 'BAD' : 'GOOD'}`
              }
              width={windowMode ? 145 : 50}
            />
          </div>
          <div className="detail__rate__start">
            <Rate
              style={{ fontSize: 10 }}
              disabled
              allowHalf
              value={detailFilm.danhGia / 2}
            />
          </div>
          <div className="detail__rate__comment">20 người đánh giá</div>
        </div>
      </div>
    </div>
  );
};

export default TopDetail;
// const { detailFilm, loading } = props;
TopDetail.propTypes = {
  loading: PropTypes.bool,
  detailFilm: PropTypes.objectOf(PropTypes.any),
};

TopDetail.defaultProps = {
  loading: false,
  detailFilm: {},
};
