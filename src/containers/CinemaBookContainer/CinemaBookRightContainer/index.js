import React from 'react';

import CinemaBookRight from 'components/CinemaBook/CinemaBookRight';

import { useSelector } from 'react-redux';

const CinemaBookRightContainer = () => {
  const { cinemas } = useSelector((state) => state.cinemaBook);
  const { cinemaSystem, listDetail, loadFirst, loading } = useSelector(
    (state) => state.cinema
  );

  const renderFirstMovie = () => {
    return cinemaSystem.map((item) => {
      return item.lstCumRap[0].maCumRap;
    });
  };

  return (
    <CinemaBookRight
      idRap={
        listDetail && listDetail.length > 0
          ? listDetail
          : renderFirstMovie().toString()
      }
      cinemas={cinemas}
      cinemaSystem={cinemaSystem}
      loadFirst={loadFirst}
      loading={loading}
    />
  );
};

export default CinemaBookRightContainer;
