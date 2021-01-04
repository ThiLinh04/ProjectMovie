import React, { useEffect, useCallback } from 'react';

import { getFirstLoad } from 'core/redux/actions/cinema';
import { useSelector, useDispatch } from 'react-redux';
import CinemaBookLeft from 'components/CinemaBook/CinemaBookLeft';

const CinemaBookLeftContainer = () => {
  const dispatch = useDispatch();
  const { cinemas } = useSelector((state) => state.cinemaBook);
  const { cinemaSystem, loadFirst, loading } = useSelector(
    (state) => state.cinema
  );
  const { maHeThongRap = '' } = cinemas[0];

  const renderFirst = useCallback(() => {
    return cinemaSystem.map((item) => {
      return item.lstCumRap[0].maCumRap;
    });
  }, [cinemaSystem]);

  useEffect(() => {
    dispatch(getFirstLoad(renderFirst()));
  }, [dispatch, cinemaSystem, renderFirst]);

  return (
    <CinemaBookLeft
      loading={loading}
      renderFirst={loadFirst}
      cinemaSystem={cinemaSystem}
      maHeThongRap={maHeThongRap}
    />
  );
};

export default CinemaBookLeftContainer;
