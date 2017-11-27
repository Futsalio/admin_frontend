import React from 'react';
import { Layout, Icon, Button } from 'antd';

import './HeaderLayout.css';
import { logout } from '../../utils/auth';

const { Header } = Layout;

export default class HeaderLayout extends React.Component {

  render() {
    return (
      <Header className = 'header'>
        <Icon
          className = 'trigger'
          type = {this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick = {this.props.toggle}
        />
        <div className = 'btnContainer'>
          <Button ghost onClick = {logout} className = 'btn'>Logout</Button>
        </div>
      </Header>
    );
  }
}
