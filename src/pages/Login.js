import React, { Component } from "react";
import 'antd/dist/antd.css';
import '../css/Login.css';
import {Card} from 'antd';
import {Row, Col} from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useHistory } from "react-router-dom";


const LoginForm = () => {

    const history = useHistory();

    const onFinish = values => {
      console.log('Received values of form: ', values);
      history.replace("/AdminInventory");
    };  
  
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          
          Or <Link to='/Register'>register now!</Link>
        </Form.Item>
      </Form>
    );
};
  
class Login extends Component {
    render() {
        return (
            <div className="site-card-border-less-wrapper" className="bglogin">
                <Row  className="row-form-login">
                    <Card title="Login" bordered={true} style={{ width: 300, height:350, color: "" }} hoverable={true}>
                        <LoginForm />
                    </Card>
                </Row>       
            </div>
        );
    }
}

export default Login;
