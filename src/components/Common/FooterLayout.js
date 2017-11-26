import React from 'react';
import { Layout } from 'antd';

import './FooterLayout.css';

const { Footer } = Layout;

export default class FooterLayout extends React.Component {
  render() {
    return (
      <Footer className = 'footer'>
        Futsalio ©2017 All Right Reserved
      </Footer>
    );
  }
}
