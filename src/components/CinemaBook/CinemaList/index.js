import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useDispatch } from 'react-redux';

import { getHeThongRapId, listDetailFilm } from 'core/redux/actions/cinema';
import {
  CinemaBookLeftContainer,
  CinemaBookRightContainer,
  CinemaBookLeftContainerResponsive,
} from 'containers';

import { Collapse } from 'antd';

const { Panel } = Collapse;

const CinemaList = (props) => {
  const { listCinema, className, id, maHeThongRap } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeThongRapId(maHeThongRap));
  }, [dispatch, maHeThongRap]);

  const handleSelectLogo = (key) => {
    // eslint-disable-next-line no-console
    console.log('logo:', key);

    dispatch(getHeThongRapId(key));
    dispatch(listDetailFilm([]));
  };

  const renderLogo = () => {
    return listCinema.map((item, index) => {
      return (
        <li
          className="item__detail"
          key={index}
          onClick={() => handleSelectLogo(item.maHeThongRap)}
        >
          <img src={item.logo} alt="" />
          <span />
        </li>
      );
    });
  };

  // responsive mobile
  const renderLogoMobile = () => {
    return listCinema.map((item, index) => {
      // console.log("logo:", item);
      return (
        <Collapse
          accordion
          // defaultActiveKey={['0']}
          onChange={() => handleSelectLogo(item.maHeThongRap)}
          expandIconPosition="right"
        >
          <Panel
            key={index}
            header={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <div>
                <img src={item.logo} alt="" style={{ width: 50 }} />
                <span style={{ marginLeft: 10 }}>{item.tenHeThongRap}</span>
              </div>
            }
          >
            <div className="cinema__left">
              <CinemaBookLeftContainerResponsive />
            </div>
          </Panel>
        </Collapse>
      );
    });
  };

  return (
    <div className={classNames('wrap__v2__container', className)} id={id}>
      <div className="wrap__v2__movie">
        <div className="movie__logo">
          <ul className="movie__logo__item">{renderLogo()}</ul>
        </div>
        <div className="movie__info">
          <div className="movie__branch">
            <CinemaBookLeftContainer />
          </div>
          <div className="movie__list">
            <CinemaBookRightContainer />
          </div>
        </div>
      </div>
      <div className="wrap__v3__mobile">
        <div className="movie__logo__mobile">
          <div className="movie__logo__item">{renderLogoMobile()}</div>
        </div>
      </div>
    </div>
  );
};

export default CinemaList;

CinemaList.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  maHeThongRap: PropTypes.string,
  listCinema: PropTypes.arrayOf(PropTypes.any),
};

CinemaList.defaultProps = {
  id: '',
  className: '',
  maHeThongRap: '',
  listCinema: [],
};
