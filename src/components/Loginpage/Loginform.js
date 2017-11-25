import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state = {
    modal: false
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.error !== nextProps.error) {
      if(nextProps.error) {
        this.setState({
          modal: true
        })
      }
    }
  }

  _closeModal = () => {
    this.setState({
      modal: false
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if(!err) {
        let username = values.userName;
        let password = values.password;
        let loginResult = 'username not found';

        if(this.props.message === 'fetch success') {
          let userData = this.props.userData;

          for(let i = 0; i < userData.length; i++) {
            if(userData[i].username === username && userData[i].password === password) {
              loginResult = 'success';
              localStorage.setItem("futsalio", JSON.stringify(userData[i]));
            } else if(userData[i].username === username && userData[i].password !== password) {
              loginResult = 'wrong password';
            }
          }
        }

        if(loginResult === 'success') {
          this.props.login(true, false);
        } else {
          this.props.login(false, loginResult);
        }

      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        {this.state.modal &&
          <Alert message={this.props.error} type="error" style={{ marginBottom: '1em' }} onClose={this._closeModal} showIcon closable/>
        }
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-btn">
            Log in
          </Button>
          {/* Or <a href="">register now!</a> */}
        </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm;
