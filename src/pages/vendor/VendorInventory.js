import React from 'react';
import {Layout} from 'antd';
import SiderMenuVendor from '../../components/SiderMenuVendor';

const {Content} = Layout;


class VendorInventory extends React.Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenuVendor />
                <Content>
                    <div>
                        Hello Vendor
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default VendorInventory;