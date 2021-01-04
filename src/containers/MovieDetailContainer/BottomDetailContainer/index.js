import React from 'react';
import { useSelector } from 'react-redux';

import BottomDetail from 'components/MovieDetail/BottomDetail';

const BottomDetailContainer = () => {
  const { detailFilm, loading } = useSelector((state) => state.movie);

  return <BottomDetail detailFilm={detailFilm} loading={loading} />;
};

export default BottomDetailContainer;
