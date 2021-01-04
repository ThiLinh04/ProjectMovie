import React from 'react';
import { useSelector } from 'react-redux';

import { SignIn } from 'pages';

const SignInContainer = (props) => {
  const { loading, errors } = useSelector((state) => state.user);

  return <SignIn loading={loading} errors={errors} {...props} />;
};

export default SignInContainer;
