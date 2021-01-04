import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from 'core/redux/actions/user';

// eslint-disable-next-line import/no-extraneous-dependencies
import { DownOutlined, LoadingOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer, Menu, Dropdown, Spin, Anchor } from 'antd';

// import useWindowSize from "components/common/hooks/useWindowSize";

const { Link } = Anchor;

const Header = (props) => {
  const { user_info, isAuthenticated, loading } = props;
  const { push } = useHistory();

  // responsive size theo react hook

  // const size = useWindowSize();
  // const windowMode = size.width >= 1024;
  // console.log("size", size.width);

  const dispatch = useDispatch();
  const _handleLogOut = () => {
    dispatch(signOut(push('/')));
  };

  // response
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  // loading icons
  const antIconLoading = <LoadingOutlined style={{ fontSize: 14 }} spin />;
  //
  const menu = (
    <Menu>
      <Menu.Item onClick={_handleLogOut}>Đăng Xuất</Menu.Item>
    </Menu>
  );

  const signedInLink = () => {
    if (loading && isAuthenticated) return <Spin indicator={antIconLoading} />;

    return (
      <div className="header__button__dropdown">
        <Dropdown overlay={menu} trigger={['click']}>
          <li className="ant-dropdown-link">
            <span>Hi, {user_info.full_name} </span>
            <DownOutlined />
          </li>
        </Dropdown>
      </div>
    );
  };

  const signedOutLink = () => {
    return (
      <ul>
        <li>
          <img src="/image/login.png" className="login" alt="" />
        </li>

        <li onClick={onClose}>
          <NavLink to="/signin" href="#" className="item dangnhap">
            Đăng nhập
          </NavLink>
        </li>

        <li onClick={onClose}>
          <NavLink to="/signup" href="#" className="item dangky">
            Đăng ký
          </NavLink>
        </li>
      </ul>
    );
  };

  // const arrTitle = ["Lịch Chiếu", "Cụm Rạp", "Tin Tức", "Liên Hệ"];
  const navLinks = [
    { label: 'Lịch chiếu', to: '#lichchieu' },
    { label: 'Cụm Rạp', to: '#cumrap' },
    { label: 'Tin Tức', to: '/' },
    { label: 'Liên hệ', to: '/' },
  ];

  const renderTitle = () => {
    return navLinks.map((item, index) => {
      return (
        <li className="nav-item" onClick={onClose}>
          <NavLink to="/">
            <Link
              className="header__nav__link"
              key={index}
              href={item.to}
              title={item.label}
            />
          </NavLink>
        </li>
      );
    });
  };

  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/" className="header__logo__name" href="#">
          {/* <img src="/image/web-logo.png" className="logo" /> */}
          Phim.net
        </NavLink>
      </div>

      <div className="header__nav">
        <ul>
          <Anchor>{renderTitle()}</Anchor>
        </ul>
      </div>

      <div className="header__button">
        {isAuthenticated ? signedInLink() : signedOutLink()}
      </div>
      <div className="header__drawer">
        <div onClick={showDrawer} className="icon__drawer">
          <MenuOutlined style={{ fontSize: '20px', color: '#08c' }} />
        </div>

        <Drawer
          // title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <div className="header__logo__draw">
            <NavLink to="/" className="header__logo__name" href="#">
              Phim.net
            </NavLink>
          </div>
          <hr />
          <div className="menu__drawer">
            <Anchor className="ul__draw">{renderTitle()}</Anchor>
          </div>
          <hr />
          <div className="header__button button__drawer">
            {isAuthenticated ? signedInLink() : signedOutLink()}
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;

Header.propTypes = {
  user_info: PropTypes.objectOf(PropTypes.any),
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

Header.defaultProps = {
  user_info: {},
  isAuthenticated: false,
  loading: false,
};
