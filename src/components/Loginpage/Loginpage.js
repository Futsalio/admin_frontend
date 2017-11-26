import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { fetchUser, login } from '../../actions/userActions';
import './Loginpage.css';
import { checkLogin } from '../../utils/auth';
import Loginform from './Loginform';

class Loginpage extends React.Component {

  componentDidMount() {
    document.body.className = 'loginpage';

    this.props.fetchUserData();
  }

  render() {
    if(checkLogin()) {
      return(
        <Redirect to = '/dashboard' />
      );
    }

    return (
      <div className = 'form_container'>
        <h2 className = 'h2'>Futsalio Admin</h2>
        <Loginform
          userData = {this.props.data}
          message = {this.props.message}
          error = {this.props.error}
          errorCount = {this.props.errorCount}
          login = {this.props.login}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.userStore.data,
    fetching: state.userStore.fetching,
    fetched: state.userStore.fetched,
    error: state.userStore.error,
    errorCount: state.userStore.errorCount,
    message: state.userStore.message,
    isLogin: state.userStore.isLogin,
    user: state.userStore.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetchUser()),
    login: (result, isLogin, error, errorCount) => dispatch(login(result, isLogin, error, errorCount))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);
