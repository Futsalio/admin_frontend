import React from 'react';
import { Button } from 'antd';

import './Dashboardpage.css';

export default class Dashboardpage extends React.Component {
  componentDidMount() {
    document.body.className = "base";
  }

  render() {
    return (
      <div>
        <p>Dashboardpage</p>
        <Button type="primary">Logout</Button>
      </div>
    );
  }
}
