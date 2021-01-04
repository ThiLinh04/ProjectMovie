/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import classNames from 'classnames';

import { Footer } from 'components';
import { HeaderContainer } from 'containers';

const DefaultLayout = (props) => {
  // console.log("default", props);
  const headerRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      const _scrollY = window.scrollY;

      if (_scrollY > 0) {
        setIsScroll(true);
        return;
      }
      setIsScroll(false);
    });
  }, []);

  // --> Progress Bar Scroll

  useEffect(() => {
    const progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      const progressBar = document.getElementById('progressBar');

      progressBar.style.transform = `scale(${scroll}, 1)`;
      progressBar.style.opacity = `${scroll}`;
    };
    window.addEventListener('scroll', progressBarHandler);
    return () => window.removeEventListener('scroll', progressBarHandler);
  });

  return (
    <div className="container">
      <div id="progressBarContainer">
        <div id="progressBar" />
      </div>
      {/* className : hỗ trợ so sánh, className sẽ tồn tại khi biến isScroll true */}
      <div
        className={classNames('container__header', {
          'container__header--scroll': isScroll,
        })}
        ref={headerRef}
      >
        <HeaderContainer {...props} />
      </div>

      {/* dùng để thay đổi nội dung bên trong body */}
      <div className="body">{props.children}</div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
