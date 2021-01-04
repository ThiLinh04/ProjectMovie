/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { LoadingOutlined } from '@ant-design/icons';
import { Modal, Tag, Spin, Rate } from 'antd';
import classNames from 'classnames';

import useWindowSize from 'components/common/hooks/useWindowSize';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieLoader from '../Loaders/MovieLoader';

const { CheckableTag } = Tag;
const tagsData = [
  { label: 'Đang Chiếu', key: 'current' },
  { label: 'Sắp Chiếu', key: 'early' },
];

const dayCurrent = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

const Movie = (props) => {
  const {
    changeTrailer,
    movieList,
    trailer,
    loading,
    className,
    id,
    getDetailAFlim,
  } = props;
  const ref = useRef({});

  const [confirmLoading] = useState(false);
  const [titleTab] = useState('home');
  const [visible, setVisible] = useState(false);
  const [selectedTags, setSelectedTags] = useState([tagsData[0]]);
  const size = useWindowSize();

  const windowMode = size.width && size.width >= 1024;

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    // console.log("Clicked cancel button");
    setVisible(false);
  };

  // loading
  const antIcon = (
    //
    <LoadingOutlined
      style={{ fontSize: 50, marginTop: 200, marginLeft: 100 }}
      spin
      className="spin__loading"
    />
  );

  // slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: windowMode ? 4 : 1,
    slidesToScroll: windowMode ? 3 : 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [tag]
      : selectedTags.filter((t) => t !== tag);

    setSelectedTags(nextSelectedTags);
  };

  const renderMovieList = () => {
    const dateCurrent = dayCurrent();

    return movieList.map((movie, index) => {
      if (loading)
        return (
          <div className="movie__loader">
            <Spin indicator={antIcon} />
          </div>
        );

      const dateParse = new Date(movie.ngayKhoiChieu.slice(0, 10));
      const dateLaunch = `${dateParse.getFullYear()}-${
        dateParse.getMonth() + 1
      }-${dateParse.getDate()}`;

      if (
        selectedTags && selectedTags[0].label === tagsData[0].label
          ? dateLaunch < dateCurrent
          : dateLaunch > dateCurrent
      ) {
        return (
          <div key={index} className="tabPane__slide">
            <div className="tabPane__slide__info">
              <div className="info__img">
                <img src={movie.hinhAnh} alt="" className="image h-100" />
              </div>
              <div className="info__play" onClick={showModal}>
                <img
                  src="./image/play-video.png"
                  data-toggle="modal"
                  data-target="#modelMovie"
                  onClick={() => changeTrailer(movie.trailer)}
                  alt=""
                />
              </div>
              <div className="info__detail">
                <span>{movie.tenPhim}</span>
                <p>
                  <Rate disabled defaultValue={movie.danhGia / 2} />
                </p>
                <div
                  className="detail__button"
                  onClick={() => getDetailAFlim(movie.maPhim)}
                >
                  <Link
                    to={`/detail/${movie.maPhim}`}
                    className="detail__button__muaVe"
                  >
                    MUA VÉ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }

      return null;
    });
  };

  const renderSlider = () => {
    if (loading) return <MovieLoader windowMode={windowMode ? 4 : 1} />;

    return (
      <Slider ref={ref} {...settings}>
        {renderMovieList()}
      </Slider>
    );
  };

  return (
    <div className={classNames('content', className)} id={id}>
      <div className="content__title">
        <div className="nav nav-pills">
          {tagsData.map((tag) => (
            <CheckableTag
              key={tag.key}
              checked={selectedTags.indexOf(tag) > -1}
              onChange={(checked) => handleChange(tag, checked)}
            >
              {tag.label}
            </CheckableTag>
          ))}
        </div>
      </div>
      <div className="content__listMV">
        {/* Tab panes */}
        <div
          className="content__listMV__tabPane"
          id={titleTab && titleTab === 'home' ? 'home' : 'menu1'}
        >
          {renderSlider()}
          {/* modal */}
          <div className="tabPane__modal fade" id="modelMovie">
            <Modal
              footer={null}
              visible={visible}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <div className="tabPane__modal__video">
                <iframe
                  width={windowMode ? 800 : 305}
                  height={windowMode ? 503 : 200}
                  src={trailer}
                  frameBorder={0}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;

Movie.propTypes = {
  id: PropTypes.string,
  loading: PropTypes.bool,
  trailer: PropTypes.string,
  className: PropTypes.string,

  changeTrailer: PropTypes.func,
  getDetailAFlim: PropTypes.func,
  movieList: PropTypes.arrayOf(PropTypes.any),
};

Movie.defaultProps = {
  id: '',
  trailer: '',
  movieList: [],
  className: '',
  loading: false,

  changeTrailer: () => {},
  getDetailAFlim: () => {},
};
