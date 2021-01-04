import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  onChangeTrailer,
  movieListData,
  flimDetail,
} from 'core/redux/actions/movieList';

import { Movie } from 'components';

const MovieContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieListData());
  }, [dispatch]);

  const { movieList, trailer, loading } = useSelector((state) => state.movie);

  const handleChangeTrailer = (_trailer) => {
    dispatch(onChangeTrailer(_trailer));
  };

  const getDetailAFlim = (idMovie) => {
    dispatch(flimDetail(idMovie));
  };

  return (
    <Movie
      {...props}
      trailer={trailer}
      movieList={movieList}
      loading={loading}
      changeTrailer={handleChangeTrailer}
      getDetailAFlim={getDetailAFlim}
    />
  );
};

export default MovieContainer;
