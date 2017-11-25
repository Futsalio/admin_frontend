import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Store from './stores/index.js';
import { Redirectpage, NoMatch } from './components/Redirectpage';
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
            <Route exact path = '/dashboard' component = {Dashboardpage} />
            <Route exact path = '/partner' component = {Partnerpage} />
            <Route component = {NoMatch}/>
          </Switch>
        </BrowserRouter>
      </LocaleProvider>
    </Provider>
  );
}

export default App;
