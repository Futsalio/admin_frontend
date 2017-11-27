import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FaFutbolO } from 'react-icons/lib/fa';

import '../../utils/global.css';
import logo from '../../images/futsalio-70x70.png';

export default class SidebarMenu extends React.Component {
  render() {
    return (
      <div>
        <div className = 'slogan'>
          <img src = {logo} alt = 'logo' className = 'img'/>
          <p className = 'slogan_text'>{this.props.sloganText ? 'Futsalio' : ''}</p>
        </div>
        <Menu theme = 'dark' mode = 'inline' defaultSelectedKeys = {[this.props.sidebarKey]}>
          <Menu.Item key = '1'>
            <Link to = '/dashboard'>
              <Icon type = 'home' style = {{fontSize: 18}}/>
              <span>Beranda</span>
            </Link>
          </Menu.Item>
          <Menu.Item key = '2'>
            <Icon><FaFutbolO style = {{fontSize: 18}}/></Icon>
            <span>Lapangan</span>
          </Menu.Item>
          <Menu.Item key = '3'>
            <Link to = '/partner'>
              <Icon type = 'flag' style = {{fontSize: 18}}/>
              <span>Tempat Futsal</span>
            </Link>
          </Menu.Item>
          <Menu.Item key = '4'>
            <Icon type = 'shopping-cart' style = {{fontSize: 18}}/>
            <span>Pemesanan dan Pembayaran</span>
          </Menu.Item>
          <Menu.Item key = '5'>
            <Icon type = 'team' style = {{fontSize: 18}}/>
            <span>Pengguna</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
