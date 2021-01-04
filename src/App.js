import React, { useEffect, useCallback } from 'react';

import { DefaultLayout } from 'components';
import { HomePage, Details } from 'pages';

import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import lazyLoading from "./LazyLoading";
// import ProgressBar from "react-topbar-progress-indicator";

import SelectChairContainer from 'containers/SelectChairContainers/SelectChairContainer';
import { createAction } from './core/redux/actions';
import { SignInContainer, SignUpContainer } from './containers';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const _getCredentialsFromLocal = useCallback(() => {
    // eslint-disable-next-line no-undef
    const creStr = localStorage.getItem('credential');
    if (creStr) {
      dispatch(
        // parse json thành đối tượng javasript
        createAction('SIGN_IN_SUCCESS', JSON.parse(creStr))
      );
    }
  }, [dispatch]);

  // chạy khi render giao diện: kiểm tra xem có tài khoản dưới local không ?
  useEffect(() => {
    if (!_getCredentialsFromLocal) return;

    _getCredentialsFromLocal();
  }, [_getCredentialsFromLocal]);

  // const Detail = lazyLoading(
  //   () => {
  //     return new Promise((resolve) => {
  //       setTimeout(() => resolve(import("pages/Details")), 2000);
  //     });
  //   },
  //   {
  //     fallback: <ProgressBar />,
  //   }
  // );

  return (
    <BrowserRouter>
      <DefaultLayout>
        {/* <Home /> */}

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUpContainer} />
          <Route exact path="/signin" component={SignInContainer} />
          <Route exact path="/detail/:id" component={Details} />

          <Route
            exact
            path="/selectchair/:id"
            component={SelectChairContainer}
          />
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
