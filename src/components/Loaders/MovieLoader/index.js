/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { Spin } from 'antd';

const antIcon = (
  //
  <LoadingOutlined style={{ fontSize: 50 }} spin className="spin__loading" />
);

const MovieLoader = (props) => {
  const { windowMode } = props;
  const arrMovie = windowMode === 4 ? [0, 1, 2, 3] : [0];
  return (
    <div className="slick_loader">
      {arrMovie.map(() => {
        return (
          <div className="tabPane__slide">
            <Spin indicator={antIcon} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieLoader;

MovieLoader.propTypes = {
  windowMode: PropTypes.number,
};

MovieLoader.defaultProps = {
  windowMode: 4,
};
