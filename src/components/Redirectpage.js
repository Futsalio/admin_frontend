import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './Redirectpage.css';
import { loginWithLocalStorage } from '../actions/userActions';
import { checkLogin } from '../utils/auth';

const Redirectpage = (props) => {
  if(props.isLogin) {
    return <Redirect to = '/dashboard' />
  } else if(checkLogin()) {
    let data = localStorage.getItem('futsalio');
    props.loginWithLocalStorage(data);
    return <Redirect to = '/dashboard' />
  }

  return <Redirect to = '/login' />
}

export const NoMatch = ({ location }) => (
  <div className = 'notFound'>
    <h1 className = 'h1'>404</h1>
    <h3 className = 'h3'>Uh oh, there is nothing here..</h3>
    <Link to = '/'>
      <Button type = 'primary' className = 'btn'>Back to Home</Button>
    </Link>
  </div>
);

const mapStateToProps = (state) => {
  return {
    isLogin: state.userStore.isLogin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginWithLocalStorage: (data) => dispatch(loginWithLocalStorage(data))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Redirectpage);
