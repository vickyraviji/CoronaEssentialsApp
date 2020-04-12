import React,{Component} from 'react';

import 'antd/dist/antd.css';
import '../../css/index.css';
import { Upload, message ,Row,Col} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import {Layout} from 'antd';
import SiderMenuAdmin from '../../components/SiderMenuAdmin';
const {Content} = Layout;
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Upload_docs = ()=>{
  return(
    <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Upload the Necessary doucuments which provides the proof for your Organisation. 
    </p>
  </Dragger>
   
  );
  
}


class UploadDocuments extends React.Component {
    render() {
      
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenuAdmin />
                <Content>
                  <Row style = {{height : 200}}>

                 
                <Col span = {24}>
                   <Upload_docs/>
                   </Col>
                   </Row>
                </Content>
            </Layout>
        );
    }
}
export default UploadDocuments;

 