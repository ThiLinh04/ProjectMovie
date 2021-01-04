/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';

import BottomFirst from 'components/MovieDetail/BottomDetail/BottomFirst';
import { getListCinema } from 'core/redux/actions/cinema';

import { useSelector, useDispatch } from 'react-redux';

const BottomDetailFirst = () => {
  const { detailFilm, loading } = useSelector((state) => state.movie);
  const { listCinema, cinemaSystem } = useSelector((state) => state.cinema);

  const dispatch = useDispatch();

  const arrSys = [];

  useEffect(() => {
    dispatch(getListCinema());
  }, [dispatch]);

  const systemCinema = () => {
    detailFilm.lichChieu &&
      detailFilm.lichChieu.length > 0 &&
      detailFilm.lichChieu.map((item) => {
        if (!arrSys.includes(item.thongTinRap.maHeThongRap)) {
          arrSys.push(item.thongTinRap.maHeThongRap);
        }
      });
    return arrSys;
  };

  const handleLogo = () => {
    return listCinema
      .filter((item) => {
        return !!systemCinema().includes(item.maHeThongRap);
      })
      .map((item) => {
        return item;
      });
  };
  return (
    <BottomFirst
      detailFilm={detailFilm}
      system={handleLogo()}
      cinemaSystem={cinemaSystem}
      loading={loading}
    />
  );
};

export default BottomDetailFirst;
