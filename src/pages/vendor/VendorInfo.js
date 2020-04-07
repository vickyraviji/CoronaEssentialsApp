import React from 'react';
import {Layout} from 'antd';
import SiderMenuVendor from '../../components/SiderMenuVendor';

const {Content} = Layout;


class VendorInfo extends React.Component {
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenuVendor />
                <Content>
                    <div>
                        Vendor Info
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default VendorInfo;