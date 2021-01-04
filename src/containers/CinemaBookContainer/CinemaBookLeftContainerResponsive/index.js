import React, { useEffect, useCallback } from 'react';

import { getFirstLoad } from 'core/redux/actions/cinema';
import { useSelector, useDispatch } from 'react-redux';
import CinemaBookLeftResponsive from '../../../components/CinemaBook/CinemaBookLeftResponsive';

const CinemaBookLeftContainerResponsive = () => {
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
    <CinemaBookLeftResponsive
      loading={loading}
      renderFirst={loadFirst}
      cinemaSystem={cinemaSystem}
      maHeThongRap={maHeThongRap}
    />
  );
};

export default CinemaBookLeftContainerResponsive;
