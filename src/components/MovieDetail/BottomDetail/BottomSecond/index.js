import React from 'react';
import PropTypes from 'prop-types';

const BottomSecond = (props) => {
  const { detailFilm } = props;

  const renderInfoTitle = () => {
    const dateParse = new Date(detailFilm.ngayKhoiChieu);

    const dateLaunch =
      dateParse.getDate() +
      '.' +
      (dateParse.getMonth() + 1) +
      '.' +
      dateParse.getFullYear();

    const arrTitle = [
      {
        title: 'Ngày công chiếu',
        text: dateLaunch,
      },
      {
        title: 'Đạo diễn',
        text: 'TiT PI',
      },
      {
        title: 'Diễn viên',
        text: '',
      },
      {
        title: 'Thể loại',
        text: 'Hành Động',
      },
      {
        title: 'Định dạng',
        text: '2D/Digital',
      },
      {
        title: 'Quốc gia',
        text: 'Việt Nam',
      },
    ];

    return arrTitle.map(({ title, text }, index) => {
      return (
        <div className="content__second__info">
          <div className="info--title">{title}</div>
          <div className="info--text">{index === 2 ? <br /> : text}</div>
        </div>
      );
    });
  };

  return (
    <div className="content__second">
      <div className="content__second__option">{renderInfoTitle()}</div>

      <div className="content__second__detail">
        <div className="detail--title">Nội dung</div>
        <div className="detail--text">{detailFilm.moTa}</div>
      </div>
    </div>
  );
};

export default BottomSecond;

BottomSecond.propTypes = {
  detailFilm: PropTypes.objectOf(PropTypes.any),
};

BottomSecond.defaultProps = {
  detailFilm: {},
};
