import React from 'react';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Store from './stores/index.js';
import { checkLogin, isOwner, isAdminFutsal } from './utils/auth';
import Redirectpage, { NoMatch } from './components/Redirectpage';
import Dashboardpage from './components/Dashboardpage/Dashboardpage';
import Partnerpage from './components/Partnerpage/Partnerpage';
import Loginpage from './components/Loginpage/Loginpage';

const App = () => {
  return (
    <Provider store={Store}>
      <LocaleProvider locale={enUS}>
        <BrowserRouter>
          <Switch>
            <Route exact path = '/' component = {Redirectpage} />
            <Route exact path = '/login' component = {Loginpage} />
            <Route exact path = '/dashboard'
              render = {
                (() => {
                  if(!checkLogin()) {
                    return <Redirect to = '/login' />
                  } else {
                    return <Dashboardpage />
                  }
                })
              }
            />
            <Route exact path = '/partner'
              render = {
                (() => {
                  if(!checkLogin() || isOwner() || isAdminFutsal()) {
                    return <Redirect to = '/login' />
                  } else {
                    return <Partnerpage />
                  }
                })
              }
            />
            <Route component = {NoMatch}/>
          </Switch>
        </BrowserRouter>
      </LocaleProvider>
    </Provider>
  );
}

export default App;
