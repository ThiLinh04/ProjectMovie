import React from 'react';
import { useSelector } from 'react-redux';

import { SignUp } from 'pages';

const SignUpContainer = (props) => {
  const { error_signup, loading } = useSelector((state) => state.user);
  return <SignUp loading={loading} error_signup={error_signup} {...props} />;
};

export default SignUpContainer;
