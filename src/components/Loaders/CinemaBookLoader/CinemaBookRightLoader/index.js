import React from 'react';
import { Skeleton } from 'antd';

const CinemaBookRightLoader = () => {
  const arrCinema = [1, 2, 3, 4, 5];
  return (
    <div className="movie__list__detail">
      {arrCinema.map(() => {
        return <Skeleton avatar active paragraph={{ rows: 3 }} />;
      })}
    </div>
  );
};

export default CinemaBookRightLoader;
