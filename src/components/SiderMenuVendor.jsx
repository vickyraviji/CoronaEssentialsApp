import React from 'react';
import 'antd/dist/antd.css';
import '../css/index.css';
import { Layout, Menu} from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  InfoCircleOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import {Link} from 'react-router-dom';


const { Sider } = Layout;
const { SubMenu } = Menu;

class SiderMenu extends React.Component {
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
            <Link to='/SellerCart'><AppstoreOutlined /><span>My Inventory</span></Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <UserOutlined />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="2"><Link to='/VendorInfo'></Link><InfoCircleOutlined /><span>My Organisation</span></Menu.Item>
            <Menu.Item key="4"><Link to='/VendorProfile'><ProfileOutlined/><span>My Profile</span></Link></Menu.Item> 
            <Menu.Item key="3"><Link to='/'><LogoutOutlined /><span>Logout</span></Link></Menu.Item>
             
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default SiderMenu;

