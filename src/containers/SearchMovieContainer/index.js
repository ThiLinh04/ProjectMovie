import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import SearchMovie from 'components/SearchMovie';
import { getListMovies, searchDetails } from 'core/redux/actions/search';

const SearchMovieContainer = () => {
  const dispatch = useDispatch();

  const { listNameMovie, systemTheater, codeFilm } = useSelector(
    (state) => state.search
  );

  useEffect(() => {
    dispatch(getListMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(searchDetails(codeFilm));
  }, [codeFilm, dispatch]);

  return (
    <SearchMovie
      codeFilm={codeFilm}
      listNameMovie={listNameMovie}
      systemTheater={systemTheater}
    />
  );
};

export default SearchMovieContainer;
