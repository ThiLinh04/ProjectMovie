import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'core/redux/actions/user';

import { Form, Input, Button, Checkbox } from 'antd';

import facebook from '../../assets/images/svg/facebook.svg';
import google from '../../assets/images/svg/google.svg';
import github from '../../assets/images/svg/github.svg';
import signin from '../../assets/images/img/signin.jpg';

const SignIn = (props) => {
  const dispatch = useDispatch();
  // const onFinish = (values) => {
  //   console.log('Success:', values);
  // };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const { errors, loading } = props;

  const onFinish = (values) => {
    // console.log("Success:", values);
    dispatch(login(values, props.history.goBack));
  };

  // const onFinishFailed = () => {
  //   // console.log('Failed:', errorInfo);
  // };

  return (
    <div>
      <div className="modal__signin">
        <div className="box__signin">
          <div className="box__signin__image">
            <div className="image__img">
              <img src={signin} alt="" />
            </div>
            <div className="image__text">
              <h1>Sign In</h1>
              <p>By Signing Up, you can avail full features of our services.</p>
              <p>Get an account !!!</p>
            </div>
          </div>
          <div className="form__signin">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="taiKhoan"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>

              <Form.Item
                name="matKhau"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <p style={{ color: 'red' }}>{errors}</p>
              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Sign In
                </Button>
                <Button type="primary" htmlType="submit">
                  <NavLink to="/" className="button__link">
                    Cancle
                  </NavLink>
                </Button>
              </Form.Item>
              <Form.Item>
                <span>or</span> <Link to="/signup">Sign Up</Link>
              </Form.Item>
            </Form>
            <div className="gx-flex-row gx-justify-content-between form__icon">
              <span>or connect with</span>
              <div className="form__icon__img">
                <img src={facebook} alt="" />
                <img src={google} alt="" />
                <img src={github} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

// const { errors, loading } = props;
SignIn.propTypes = {
  loading: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any),
};

SignIn.defaultProps = {
  loading: false,
  errors: [],
  history: {},
};
