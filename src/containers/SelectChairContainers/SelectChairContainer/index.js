import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { listChair } from 'core/redux/actions/chairList';
import SelectChair from 'components/SelectChair';

const SelectChairContainer = (props) => {
  const dispatch = useDispatch();
  const { listBookChair, loading } = useSelector(
    (state) => state.listBookChair
  );
  const { infoFilm, listChairs } = useSelector((state) => state.chair);

  useEffect(() => {
    // maLichChieu 40282
    // props.match.params.id
    dispatch(listChair(props.match.params.id));
  }, [dispatch, props.match]);

  return (
    <SelectChair
      {...props}
      listBookChair={listBookChair}
      infoFilm={infoFilm}
      listChairs={listChairs}
      loading={loading}
    />
  );
};

export default SelectChairContainer;

SelectChairContainer.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
};

SelectChairContainer.defaultProps = {
  match: {},
};
