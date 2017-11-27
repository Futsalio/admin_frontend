import React from 'react';
import { Breadcrumb } from 'antd';

import '../../utils/global.css';

export default class BreadcrumbLayout extends React.Component {
  render() {
    return (
      <Breadcrumb className = 'breadcrumb_base'>
        <Breadcrumb.Item>{this.props.role}</Breadcrumb.Item>
        <Breadcrumb.Item>{this.props.name}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
