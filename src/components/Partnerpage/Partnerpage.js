import React from 'react';
import { Button } from 'antd';

import { logout } from '../../utils/auth';

export default class Partnerpage extends React.Component {
  render() {
    return (
      <div>
        <p>Partnerpage</p>
        <Button type = 'primary' onClick = {logout}>Logout</Button>
      </div>
    );
  }
}
