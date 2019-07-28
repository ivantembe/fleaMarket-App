import React, { Component } from 'react';
import axios from 'axios';
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'unistore/react'
import actions from '../actions/actions'


class Login extends Component {
    handleChange(type, event) {
        const { nativeEvent } = event;
  
        this.setState({
          [type]: nativeEvent.target.value
        });
      }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });

        var payload={
            email: this.state.email,
            password : this.state.password
          }
          axios.post('http://localhost:4000/api/login', payload)
          .then((response) => {
            if(response.status === 200){
              console.log("Login successfull");
              this.props.history.push('/')
              this.props.login()
              this.props.user(response.data.user.user_fname)
              localStorage.setItem('jwt', response.data.token)
            }
          }).catch((error) => {
            console.log("error")
            alert('something went wrong :(');
          });
      }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
        <div>
            <p className="text-center my-5"> 
                Welcome to fleamarket login page. to return press {''}
                <a href="/">here</a>.
            </p>
            <Form onSubmit={this.handleSubmit} 
                className="login-form w-25 m-auto border p-4">
                <p className="py-2"> 
                    Login with your credetials or {''} 
                    <a href="/register">register now!</a> 
                </p>    
                <Form.Item>
                {getFieldDecorator('email', {
                    rules: [
                        { 
                          required: true, 
                          message: 'Please input your email!' 
                        },
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!'
                        }
                    ],
                })(
                    <Input onChange={this.handleChange.bind(this, 'email')}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="User email"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input onChange={this.handleChange.bind(this, 'password')}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item className="d-flex justify-content-center">
                    <Button type="primary" 
                        htmlType="submit" 
                        className="login-form-button text-uppercase">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default connect('isLogged', actions) (WrappedNormalLoginForm);




