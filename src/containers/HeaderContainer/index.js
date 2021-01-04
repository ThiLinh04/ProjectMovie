import React from 'react';

import { useSelector } from 'react-redux';
import { Header } from 'components';

const HeaderContainer = (props) => {
  const { user_info, isAuthenticated, loading, errors } = useSelector(
    (state) => state.user
  );

  //

  // useEffect(() => {

  // }, []);

  return (
    <Header
      {...props}
      user_info={user_info}
      isAuthenticated={isAuthenticated}
      loading={loading}
      errors={errors}
    />
  );
};

export default HeaderContainer;
