import React from 'react';
import { Layout } from 'antd';

import './Dashboardpage.css';
import { getUserData } from '../../utils/auth';
import HeaderLayout from '../Common/HeaderLayout';
import SidebarMenu from '../Common/SidebarMenu';
import BreadcrumbLayout from '../Common/BreadcrumbLayout';
import ContentLayout from './ContentLayout';
import FooterLayout from '../Common/FooterLayout';

const { Sider, Content } = Layout;

export default class Dashboardpage extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  componentDidMount() {
    document.body.className = 'base';
  }

  render() {
    let data = getUserData();

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger = {null}
          collapsible
          collapsed = {this.state.collapsed}
          width = {260}
        >
          <SidebarMenu />
        </Sider>
        <Layout>
          <HeaderLayout
            toggle = {this.toggle}
            collapsed = {this.state.collapsed}
          />
          <Content className = 'content'>
            <BreadcrumbLayout
              role = {data.role}
              name = {data.name}
            />
            <ContentLayout name = {data.name}/>
          </Content>
          <FooterLayout />
        </Layout>
      </Layout>
    );
  }
}
