import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { useDispatch } from 'react-redux';
import { listDetailFilm, getFirstLoad } from 'core/redux/actions/cinema';
import CinemaBookLeftLoader from 'components/Loaders/CinemaBookLoader/CinemaBookLeftLoader';

const CinemaBookLeft = (props) => {
  const { cinemaSystem, maHeThongRap, renderFirst, loading } = props;

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState([]);

  const handleDetailFilm = (id) => {
    dispatch(getFirstLoad([]));
    dispatch(listDetailFilm(id));
    setIsActive(id);
  };

  const renderCinema = () => {
    return (
      maHeThongRap &&
      cinemaSystem.map((item) => {
        return item.lstCumRap.map((items, index) => {
          return (
            <div
              key={index}
              onClick={() => handleDetailFilm(items.maCumRap)}
              className={ClassNames('detail__info', {
                active:
                  (renderFirst && renderFirst.length > 0
                    ? renderFirst.toString()
                    : isActive) === items.maCumRap,
              })}
            >
              <div className="detail__info__1">
                <div className="detail__info__img">
                  <img
                    src="https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg"
                    alt=""
                  />
                </div>

                <div className="detail__info__cinema">
                  <div className="cinema__name">
                    <span className="">{items.tenCumRap}</span>
                  </div>

                  <div className="cinema__address">
                    <span>{items.diaChi}</span>
                  </div>
                </div>
              </div>
              <div className="detail__info__2">
                <span />
              </div>
            </div>
          );
        });
      })
    );
  };

  if (loading) return <CinemaBookLeftLoader />;
  return (
    <div className="movie__branch__details branch__main">{renderCinema()}</div>
  );
};

export default CinemaBookLeft;

// const { cinemaSystem, maHeThongRap, renderFirst } = props;
CinemaBookLeft.propTypes = {
  maHeThongRap: PropTypes.string,
  loading: PropTypes.bool,
  renderFirst: PropTypes.arrayOf(PropTypes.any),
  cinemaSystem: PropTypes.arrayOf(PropTypes.any),
};

CinemaBookLeft.defaultProps = {
  maHeThongRap: '',
  loading: false,
  renderFirst: [],
  cinemaSystem: [],
};
