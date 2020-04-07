import React from 'react';
import 'antd/dist/antd.css';
import '../css/index.css';
import { Layout, Menu} from 'antd';
import {
  LogoutOutlined,
  AppstoreOutlined
} from '@ant-design/icons';
import { Link, Router } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderMenuAdmin extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">
            <Link to='/AdminInventory'>
              <AppstoreOutlined />
              <span>Inventory</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to='/'> 
              <LogoutOutlined />
              <span>Logout</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>

    );
  }
}

export default SiderMenuAdmin;

// Use inside this layout 
// <Layout style={{ minHeight: '100vh' }}>
// </Layout>