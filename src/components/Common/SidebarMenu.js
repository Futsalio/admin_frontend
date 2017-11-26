import React from 'react';
import { Menu, Icon } from 'antd';
import { FaFutbolO } from 'react-icons/lib/fa'

import './SidebarMenu.css';

export default class SidebarMenu extends React.Component {
  render() {
    return (
      <div>
        <div className = 'logo' />
        <Menu theme = 'dark' mode = 'inline' defaultSelectedKeys = {['1']}>
          <Menu.Item key = '1'>
            <Icon type = 'home'  style = {{fontSize: 18}}/>
            <span>Beranda</span>
          </Menu.Item>
          <Menu.Item key = '2'>
            <Icon><FaFutbolO  style = {{fontSize: 18}}/></Icon>
            <span>Lapangan</span>
          </Menu.Item>
          <Menu.Item key = '3'>
            <Icon type = 'flag'  style = {{fontSize: 18}}/>
            <span>Tempat Futsal</span>
          </Menu.Item>
          <Menu.Item key = '4'>
            <Icon type = 'shopping-cart' style = {{fontSize: 18}}/>
            <span>Pemesanan dan Pembayaran</span>
          </Menu.Item>
          <Menu.Item key = '5'>
            <Icon type = 'team'  style = {{fontSize: 18}}/>
            <span>Pengguna</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
