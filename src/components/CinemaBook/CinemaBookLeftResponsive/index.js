import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import { useDispatch } from 'react-redux';
import { listDetailFilm, getFirstLoad } from 'core/redux/actions/cinema';
import CinemaBookLeftLoader from 'components/Loaders/CinemaBookLoader/CinemaBookLeftLoader';
import { CinemaBookRightContainer } from 'containers';
import { Collapse } from 'antd';

const CinemaBookLeftResponsive = (props) => {
  const { cinemaSystem, maHeThongRap, renderFirst, loading } = props;

  const { Panel } = Collapse;

  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState([]);

  const handleDetailFilm = (id) => {
    dispatch(getFirstLoad([]));
    dispatch(listDetailFilm(id));
    setIsActive(id);
  };

  const renderCinemaLeft = () => {
    return (
      <Collapse accordion expandIconPosition="right">
        {maHeThongRap &&
          cinemaSystem.map((item) => {
            return item.lstCumRap.map((items, index) => {
              return (
                <Panel
                  header={
                    // eslint-disable-next-line react/jsx-wrap-multilines
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
                  }
                >
                  <div className="movie__list">
                    <CinemaBookRightContainer />
                  </div>
                </Panel>
              );
            });
          })}
      </Collapse>
    );
  };

  if (loading) return <CinemaBookLeftLoader />;
  return (
    <div className="movie__branch__details branch__left">
      {renderCinemaLeft()}
    </div>
  );
};

export default CinemaBookLeftResponsive;

// const { cinemaSystem, maHeThongRap, renderFirst } = props;
CinemaBookLeftResponsive.propTypes = {
  maHeThongRap: PropTypes.string,
  loading: PropTypes.bool,
  renderFirst: PropTypes.arrayOf(PropTypes.any),
  cinemaSystem: PropTypes.arrayOf(PropTypes.any),
};

CinemaBookLeftResponsive.defaultProps = {
  maHeThongRap: '',
  loading: false,
  renderFirst: [],
  cinemaSystem: [],
};
