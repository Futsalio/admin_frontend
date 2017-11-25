import React from 'react';
import { Button } from 'antd';
import { Redirect } from 'react-router';

import './Dashboardpage.css';
import { checkLogin, logout } from '../../utils/auth';

export default class Dashboardpage extends React.Component {
  componentDidMount() {
    document.body.className = 'base';
  }

  render() {
    if(!checkLogin()) {
      return(
        <Redirect to = '/login' />
      );
    }

    return (
      <div>
        <p>Dashboardpage</p>
        <Button type = 'primary' onClick = {logout}>Logout</Button>
      </div>
    );
  }
}
