import React from 'react';

import { useSelector } from 'react-redux';

import TopDetail from 'components/MovieDetail/TopDetail';

const TopDetailContainer = () => {
  const { detailFilm, loading } = useSelector((state) => state.movie);

  return <TopDetail detailFilm={detailFilm} loading={loading} />;
};

export default TopDetailContainer;
