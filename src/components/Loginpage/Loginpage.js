import React from 'react';

import './Loginpage.css';
import Loginform from './Loginform';

export default class Loginpage extends React.Component {

  componentDidMount(){
    document.body.className="loginpage"
  }

  render() {
    return (
      <div className="form_container">
        <h2 className="h2">Futsalio Admin</h2>
        <Loginform />
      </div>
    );
  }
}
