import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import moment from 'moment';
import { Collapse } from 'antd';
import CinemaBookRightLoader from 'components/Loaders/CinemaBookLoader/CinemaBookRightLoader';

const CinemaBookRight = (props) => {
  const { cinemaSystem, idRap, loadFirst, loading } = props;
  const [isActive, setIsActive] = useState([]);

  const { Panel } = Collapse;

  useEffect(() => {
    setIsActive('1');
  }, [loadFirst]);

  const handleChange = (key) => {
    setIsActive(key);
  };

  const renderDetailFilm = () => {
    return (
      <Collapse
        onChange={handleChange}
        destroyInactivePanel
        activeKey={
          loadFirst && loadFirst.length > 0
            ? [isActive]
            : isActive === '1'
            ? ['1']
            : isActive
        }
        bordered={false}
        accordion
      >
        {cinemaSystem.map((items) => {
          return items.lstCumRap.map((item) => {
            return (
              item.maCumRap === idRap &&
              item.danhSachPhim.map((phim, index) => {
                const ageType = ['C18', 'C13', 'P'];
                const random = Math.floor(Math.random() * ageType.length);
                return (
                  <Panel
                    key={index + 1}
                    className="detail__movie"
                    showArrow={false}
                    header={
                      // eslint-disable-next-line react/jsx-wrap-multilines
                      <div className="detail__movie__current">
                        <div className="current__img">
                          <img src={phim.hinhAnh} alt="" />
                        </div>
                        <div className="current__info">
                          <div className="current__info__nameFlim">
                            <span className="ageType">{ageType[random]}</span>
                            <span className="title">{phim.tenPhim}</span>
                          </div>

                          <div className="current__info__time">
                            <span>100 phút - Rate 6.5 - IDMb 0</span>
                          </div>
                        </div>
                      </div>
                    }
                  >
                    <div className="detail__movie__more">
                      <div className="more__formal">2D Digital</div>
                      <div className="more__showtime">
                        {phim.lstLichChieuTheoPhim
                          .slice(0, 10)
                          .map((time, filmIndex) => {
                            const tmp = new Date(time.ngayChieuGioChieu);
                            const tmp1 = new Date(tmp.getTime() + 100 * 36000);

                            const timeStart = `${tmp.getHours()}:${tmp.getMinutes()}`;
                            const timeEnd = `${tmp1.getHours()}:${tmp1.getMinutes()}`;

                            return (
                              <div className="showtime--button">
                                <Link
                                  key={filmIndex}
                                  to={`/selectchair/${time.maLichChieu}`}
                                >
                                  {timeStart}~{timeEnd}
                                  {/* {timeStart.format('HH:mm')} ~{' '}
                                  {timeEnd.add(100, 'minutes').format('HH:mm')} */}
                                </Link>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </Panel>
                );
              })
            );
          });
        })}
      </Collapse>
    );
  };
  if (loading) return <CinemaBookRightLoader />;
  return <div className="movie__list__detail">{renderDetailFilm()}</div>;
};

export default CinemaBookRight;

// const { cinemaSystem, idRap, loadFirst } = props;
CinemaBookRight.propTypes = {
  idRap: PropTypes.string,
  loadFirst: PropTypes.arrayOf(PropTypes.any),
  cinemaSystem: PropTypes.arrayOf(PropTypes.any),
  loading: PropTypes.bool,
};

CinemaBookRight.defaultProps = {
  idRap: '',
  loadFirst: [],
  cinemaSystem: [],
  loading: true,
};
