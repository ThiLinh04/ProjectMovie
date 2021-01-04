import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CinemaList from 'components/CinemaBook/CinemaList';
import { getListCinema } from 'core/redux/actions/cinema';

const CinemaListContainer = (props) => {
  const dispatch = useDispatch();

  const { listCinema, loading, cinemaSystem } = useSelector(
    (state) => state.cinema
  );
  const { cinemas } = useSelector((state) => state.cinemaBook);
  const { maHeThongRap = '' } = cinemas[0];

  useEffect(() => {
    dispatch(getListCinema());
  }, [dispatch]);

  return (
    <CinemaList
      {...props}
      listCinema={listCinema}
      maHeThongRap={maHeThongRap}
      loading={loading}
      cinemaSystem={cinemaSystem}
    />
  );
};

export default CinemaListContainer;
