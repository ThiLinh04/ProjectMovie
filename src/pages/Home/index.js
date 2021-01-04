import React from 'react';

import { Carousel } from 'components';
import {
  CinemaListContainer,
  MovieContainer,
  SearchMovieContainer,
} from 'containers';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="section__carousel">
        <Carousel />
        <SearchMovieContainer />
      </div>

      <div className="section__movie">
        <div className="section__movie__wrap">
          <div className="wrap__v1">
            <MovieContainer id="lichchieu" />
          </div>
          <div className="wrap__v2">
            <CinemaListContainer id="cumrap" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
