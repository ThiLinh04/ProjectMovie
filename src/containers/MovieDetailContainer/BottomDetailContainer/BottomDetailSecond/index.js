import React from 'react';

import { useSelector } from 'react-redux';

import BottomSecond from 'components/MovieDetail/BottomDetail/BottomSecond';

const BottomDetailSecond = () => {
  const { detailFilm, loading } = useSelector((state) => state.movie);

  return <BottomSecond detailFilm={detailFilm} loading={loading} />;
};

export default BottomDetailSecond;
