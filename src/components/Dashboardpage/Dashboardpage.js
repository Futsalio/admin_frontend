import React from 'react';
import { Button } from 'antd';

import './Dashboardpage.css';
import { logout, getUserData } from '../../utils/auth';

export default class Dashboardpage extends React.Component {
  componentDidMount() {
    document.body.className = 'base';
  }

  render() {
    let data = getUserData();

    return (
      <div>
        <p>Dashboardpage</p>
        <Button type = 'primary' onClick = {logout}>Logout</Button>
        <p>{data.username}</p>
        <p>{data.password}</p>
      </div>
    );
  }
}
