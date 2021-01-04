import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import useWindowSize from 'components/common/hooks/useWindowSize';
import { getHeThongRapId } from 'core/redux/actions/cinema';

import { Collapse, Skeleton } from 'antd';

const { Panel } = Collapse;

const BottomFirst = (props) => {
  const { system, cinemaSystem, detailFilm, loading } = props;
  const dispatch = useDispatch();
  const size = useWindowSize();
  const ref = useRef({});

  // slider
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  };

  const windowMode = size.width && size.width >= 1024;
  // const mobileMode = size.width && size.width >= 320;

  const [isActive, setIsActive] = useState([]);
  const [isKey, setIsKey] = useState(['1']);

  const handleSelectLogo = (id) => {
    dispatch(getHeThongRapId(id));
    setIsActive(id);
  };

  useEffect(() => {
    setIsKey('1');
  }, [system]);

  const renderBranchSlider = () => {
    return (
      <Slider ref={ref} {...settings}>
        {system.map((item, index) => {
          return (
            item && (
              <li
                className={ClassNames('item__detail', {
                  active:
                    isActive && isActive.length > 0
                      ? isActive === item.maHeThongRap
                      : system[0].maHeThongRap === item.maHeThongRap,
                })}
                key={index}
                onClick={() => handleSelectLogo(item.maHeThongRap)}
              >
                <div className="item__detail__logo">
                  <img src={item.logo} alt="Logo" />
                </div>
                <div className="item__detail__name">{item.tenHeThongRap}</div>
              </li>
            )
          );
        })}
      </Slider>
    );
  };

  const renderBranchDefault = () => {
    return system.map((item, index) => {
      return (
        item && (
          <li
            className={ClassNames('item__detail', {
              active:
                isActive && isActive.length > 0
                  ? isActive === item.maHeThongRap
                  : system[0].maHeThongRap === item.maHeThongRap,
            })}
            key={index}
            onClick={() => handleSelectLogo(item.maHeThongRap)}
          >
            <div className="item__detail__logo">
              <img src={item.logo} alt="" />
            </div>
            <div className="item__detail__name">{item.tenHeThongRap}</div>
          </li>
        )
      );
    });
  };

  // const renderLogo = () => {
  //   return system.map((item, index) => {
  //     return (
  //       item && (
  //         <li
  //           className={ClassNames("item__detail", {
  //             active:
  //               isActive && isActive.length > 0
  //                 ? isActive === item.maHeThongRap
  //                 : system[0].maHeThongRap === item.maHeThongRap,
  //           })}
  //           key={index}
  //           onClick={() => handleSelectLogo(item.maHeThongRap)}
  //         >
  //           <div className="item__detail__logo">
  //             <img src={item.logo} />
  //           </div>
  //           <div className="item__detail__name">{item.tenHeThongRap}</div>
  //         </li>
  //       )
  //     );
  //   });
  // };

  const handleChangKey = (key) => {
    setIsKey(key);
  };

  const renderCinema = () => {
    return cinemaSystem.map((cinema) => {
      return (
        <Collapse
          destroyInactivePanel
          bordered={false}
          activeKey={[isKey]}
          onChange={handleChangKey}
          accordion
        >
          {cinema.lstCumRap.map((cumRap, index) => {
            return (
              <Panel
                key={index + 1}
                showArrow={false}
                header={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <div className="list__film__infor" key={index}>
                    <div className="infor--img">
                      <img
                        src="https://s3img.vcdn.vn/123phim/2018/09/cinestar-quoc-thanh-15379636956745.jpg"
                        alt=""
                      />
                    </div>
                    <div className="infor--title">
                      <span className="title--name">{cumRap.tenCumRap}</span>
                      <span className="title--addre">{cumRap.diaChi}</span>
                    </div>
                  </div>
                }
              >
                <div className="list__film__content">
                  <div className="content__formal">2D Digital</div>

                  {cumRap.danhSachPhim.map((phim) => {
                    return (
                      <div className="content__showtime">
                        {phim.tenPhim === detailFilm.tenPhim &&
                          phim.lstLichChieuTheoPhim
                            .slice(0, 10)
                            .map((time, filmIndex) => {
                              const tmp = new Date(time.ngayChieuGioChieu);
                              const tmp1 = new Date(
                                tmp.getTime() + 100 * 36000
                              );

                              const timeStart = `${tmp.getHours()}:${tmp.getMinutes()}`;
                              const timeEnd = `${tmp1.getHours()}:${tmp1.getMinutes()}`;

                              return (
                                <div className="showtime--button">
                                  <Link
                                    key={filmIndex}
                                    to={`/selectchair/${time.maLichChieu}`}
                                  >
                                    {timeStart} ~ {timeEnd}
                                  </Link>
                                </div>
                              );
                            })}
                      </div>
                    );
                  })}
                </div>
              </Panel>
            );
          })}
        </Collapse>
      );
    });
  };

  if (loading) return <Skeleton active />;
  return (
    <div className="content__first">
      <div className="content__first__branch">
        {windowMode ? renderBranchDefault() : renderBranchSlider()}
      </div>
      <div className="content__first__list">
        <div className="list__calendar" />
        <div className="list__film">{renderCinema()}</div>
      </div>
    </div>
  );
};

export default BottomFirst;

// const { system, cinemaSystem, detailFilm, loading } = props;
BottomFirst.propTypes = {
  system: PropTypes.arrayOf(PropTypes.any),
  detailFilm: PropTypes.arrayOf(PropTypes.any),
  cinemaSystem: PropTypes.arrayOf(PropTypes.any),

  loading: PropTypes.bool,
};

BottomFirst.defaultProps = {
  system: [],
  detailFilm: [],
  cinemaSystem: [],

  loading: false,
};
