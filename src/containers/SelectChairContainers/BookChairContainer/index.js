import React from 'react';
import { useSelector } from 'react-redux';
import BookChair from '../../../components/SelectChair/BookChair';

const BookChairContainer = (props) => {
  const { listBookChair } = useSelector((state) => state.listBookChair);
  const { infoFilm, loading } = useSelector((state) => state.chair);

  return (
    <BookChair
      {...props}
      listBookChair={listBookChair}
      infoFilm={infoFilm}
      loading={loading}
    />
  );
};

export default BookChairContainer;
