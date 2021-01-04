/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Spin } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

const antIcon = (
  <SyncOutlined style={{ fontSize: 50 }} spin className="spin__loading" />
);

const MovieDetailLoader = () => {
  const arrMovie = [0];
  return (
    <div className="top__loader">
      {arrMovie.map(() => {
        return (
          <div className="top__loader__detail">
            <Spin indicator={antIcon} />
          </div>
        );
      })}
    </div>
  );
};

export default MovieDetailLoader;
