import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { fetchUser, login } from '../../actions/userActions';
import './Loginpage.css';
import { checkLogin } from '../../utils/auth';
import Loginform from './Loginform';

class Loginpage extends React.Component {

  componentDidMount() {
    document.body.className = "loginpage";

    this.props.fetchUserData();
  }

  render() {
    if(checkLogin()) {
      return(
        <Redirect to='/dashboard' />
      );
    }

    return (
      <div className="form_container">
        <h2 className="h2">Futsalio Admin</h2>
        <Loginform userData = {this.props.data} message = {this.props.message} error = {this.props.error} login = {this.props.login}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.user.data,
    fetching: state.user.fetching,
    fetched: state.user.fetched,
    error: state.user.error,
    message: state.user.message,
    isLogin: state.user.isLogin
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetchUser()),
    login: (result, error) => dispatch(login(result, error))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage);
