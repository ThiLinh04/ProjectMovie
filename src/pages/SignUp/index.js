import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUpUser } from 'core/redux/actions/user';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import Swal from 'sweetalert2';

import facebook from '../../assets/images/svg/facebook.svg';
import google from '../../assets/images/svg/google.svg';
import github from '../../assets/images/svg/github.svg';
import signin from '../../assets/images/img/signin.jpg';

const SignUp = (props) => {
  const { Option } = Select;

  const dispatch = useDispatch();
  const { error_signup } = props;

  const noticaion = () => {
    props.history.push('/');
  };

  // login
  const onFinish = (values) => {
    // console.log("Success:", values);
    dispatch(
      signUpUser(values, () => {
        Swal.fire('Thông báo', 'Đăng ký thành công', 'success');
        setTimeout(noticaion, 2000);
      })
    );
  };

  const onFinishFailed = () => {
    // console.log('Failed:', errorInfo);
  };

  const validateMessages = {
    required: 'is required!',
    types: {
      email: 'is not a valid email!',
    },
  };

  return (
    <div>
      <div className="modal__signin">
        <div className="box__signin">
          <div className="box__signin__image">
            <div className="image__img">
              <img src={signin} alt="" />
            </div>
            <div className="image__text">
              <h1>Sign Up</h1>
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
              validateMessages={validateMessages}
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
              <Form.Item
                name="hoTen"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name',
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="soDt"
                rules={[
                  {
                    required: true,
                    message: 'Please enter number',
                  },
                  {
                    pattern: /((09|03|07|08|05)+([0-9]{8})\b)/,
                    message: 'Please enter a valid channel ID',
                  },
                ]}
              >
                <Input placeholder="Phone" />
              </Form.Item>

              <Form.Item
                // {['address', 'province']}
                name="maNhom"
                noStyle
                rules={[{ required: true, message: 'Please select code' }]}
              >
                <Select placeholder="Select code">
                  <Option value="GP01">GP01</Option>
                  <Option value="GPO2">GP02</Option>
                  <Option value="GPO3">GP03</Option>
                </Select>
              </Form.Item>
              <p style={{ color: 'red' }}>{error_signup}</p>
              <Form.Item
                name="remember"
                valuePropName="checked"
                style={{ paddingTop: 10 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Sign Up
                </Button>
                <Button type="primary" htmlType="submit">
                  <NavLink to="/" className="button__link">
                    Cancle
                  </NavLink>
                </Button>
              </Form.Item>

              <Form.Item>
                <span>or</span> <Link to="/signin">Sign In</Link>
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

export default SignUp;

// const { error_signup, loading } = props;
SignUp.propTypes = {
  error_signup: PropTypes.string,
  history: PropTypes.objectOf(PropTypes.any),
};

SignUp.defaultProps = {
  history: {},
  error_signup: '',
};
