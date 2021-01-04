import React from 'react';
import { Skeleton } from 'antd';

const CinemaBookLeftLoader = () => {
  const arrCinema = [1, 2, 3, 4, 5];
  return (
    <div className="movie__branch__details ">
      {arrCinema.map(() => {
        return (
          <Skeleton
            active
            avatar
            paragraph={{ rows: 1 }}
            title={{ width: 150 }}
            shape="square"
          />
        );
      })}
    </div>
  );
};

export default CinemaBookLeftLoader;
