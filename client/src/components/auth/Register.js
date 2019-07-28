import React, { Component } from 'react';
import axios from 'axios';
import { withRouter} from 'react-router-dom';
import { Form, Icon, Input, Button } from 'antd';



class Register extends Component {
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
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password : this.state.password
          }
          axios.post('http://localhost:4000/api/register', payload)
          .then((response) => {
            if(response.status === 200){
                console.log("Register successfull");
                localStorage.setItem('jwt', response.data.token)
                this.props.history.push('/login')
            }
          })
          .catch(function (error) {
            if(error.status === 401) {
                console.log('E-Mail exists');
            }
            console.log(error);
          });
      }

    render() {
        const { getFieldDecorator } = this.props.form;
        
        return (
        <div>
            <p className="text-center my-5"> 
                Welcome to fleamarket registration page. to return press {''}
                <a href="/">here</a>.
            </p>
            <Form onSubmit={this.handleSubmit} 
                className="login-form w-25 m-auto border p-4">
                <p className="py-2"> 
                    Create your account or login {''} 
                    <a href="/login">here</a> 
                </p> 
                <Form.Item>
                    {getFieldDecorator('fname', {
                        rules: [
                            { 
                            required: true, 
                            message: 'Please input your email!' 
                            }
                        ],
                    })(
                    <Input onChange={this.handleChange.bind(this, 'fname')}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="First name"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                {getFieldDecorator('lname', {
                    rules: [
                        { 
                          required: true, 
                          message: 'Please input your email!' 
                        }
                    ],
                })(
                    <Input onChange={this.handleChange.bind(this, 'lname')}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Last name"
                    />,
                )}
                </Form.Item>   
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
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Register);
export default withRouter (WrappedNormalLoginForm);




