import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import '../../utils/global.css';
import './Dashboardpage.css';
import { changeToggle } from '../../actions/utilActions';
import { getUserData } from '../../utils/auth';
import HeaderLayout from '../Common/HeaderLayout';
import SidebarMenu from '../Common/SidebarMenu';
import BreadcrumbLayout from '../Common/BreadcrumbLayout';
import ContentDashboard from './ContentDashboard';
import FooterLayout from '../Common/FooterLayout';

const { Sider, Content } = Layout;

class Dashboardpage extends React.Component {
  toggle = () => {
    this.props.changeToggle(!this.props.collapsed, !this.props.sloganText);
  }

  componentDidMount() {
    document.body.className = 'base';
  }

  render() {
    let data = getUserData();

    return (
      <Layout className = 'layout'>
        <Sider
          trigger = {null}
          collapsible
          collapsed = {this.props.collapsed}
          width = {260}
        >
          <SidebarMenu
            sloganText = {this.props.sloganText}
            sidebarKey = {'1'}
          />
        </Sider>
        <Layout>
          <HeaderLayout
            toggle = {this.toggle}
            collapsed = {this.props.collapsed}
          />
          <Content className = 'content_container'>
            <BreadcrumbLayout
              role = {data.role}
              name = {data.name}
            />
            <ContentDashboard name = {data.name}/>
          </Content>
          <FooterLayout />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collapsed: state.toggleStore.collapsed,
    sloganText: state.toggleStore.sloganText
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeToggle: (collapsed, sloganText) => dispatch(changeToggle(collapsed, sloganText))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboardpage);
