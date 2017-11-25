import React from 'react';
import { Button } from 'antd';
import { Redirect } from 'react-router';

import { checkLogin, logout, isOwner, isAdminFutsal } from '../../utils/auth';

export default class Partnerpage extends React.Component {
  render() {
    if( !checkLogin() || isOwner() || isAdminFutsal() ) {
      return(
        <Redirect to='/login' />
      );
    }

    return (
      <div>
        <p>Partnerpage</p>
        <Button type="primary" onClick={logout}>Logout</Button>
      </div>
    );
  }
}
