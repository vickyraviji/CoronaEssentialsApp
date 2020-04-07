import React from 'react';
import {Layout} from 'antd';
import SiderMenuAdmin from '../../components/SiderMenuAdmin';

const {Content} = Layout;

class AdminInventory extends React.Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenuAdmin />
                <Content>
                    <div>
                        Hello Admin
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default AdminInventory;