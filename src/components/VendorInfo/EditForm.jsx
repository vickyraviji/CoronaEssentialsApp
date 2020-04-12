import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import '../../css/index.css';
import { Form, Input, Button, Checkbox,AutoComplete} from 'antd';
const AutoCompleteOption = AutoComplete.Option;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

const EditProfile = () => {


  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  
  const onWebsiteChange = value => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
    }
  };
  
  const websiteOptions = autoCompleteResult.map(website => ({
    label: website,
    value: website,
  }));

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
     

      <Form.Item
        label="Name Of Organisation"
        name="name_of_organisation"
        
      >
        <Input defaultValue = "Athena Technologies" />
      </Form.Item>

      <Form.Item
        label="EmailID"
        name="emailid"
       
      >
        <Input defaultValue = "Athena@gmail.com" />
      </Form.Item>

      
      <Form.Item
        label="Contact Number"
        name="contact_number"
       
      >
        <Input defaultValue = "9887654321" />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website"
       
      >
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website" defaultValue = "Athena.com" >
          <Input />
        </AutoComplete>
      </Form.Item>

      <Form.Item
        label="Address"
        name="address"
       
      >
        <Input defaultValue = "No 40/1 bunder garden main st" />
      </Form.Item>

      <Form.Item
        label="Short Description"
        name="short_description"
       
      >
        <Input defaultValue = "Ranked 10th among India" />
      </Form.Item>

      <Form.Item name="description" label="Description">
        <Input.TextArea  defaultValue = "Hi bruh how are you pls change this in DB"/>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

  </Form>
  );
}
export default EditProfile