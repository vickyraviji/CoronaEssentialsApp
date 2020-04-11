import React from 'react'
import  '../../css/mycss.css'
import 'antd/dist/antd.css';

import { Form, Input, Button,InputNumber, Col, Row } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const AddNewProduct = ()=>{

return(
    // <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
<Form.List name="NewProducts">
        {(fields, { add, remove }) => {
          /**
           * `fields` internal fill with `name`, `key`, `fieldKey` props.
           * You can extends this into sub field to support multiple dynamic fields.
           */
          return (
            <div>
              {fields.map((field, index) => (
                <Row  style = {{paddingTop:30}}>
                  <Col span ={2}></Col> 
                  <Col span ={6}>
                    <Form.Item
                      name={[field.name, "ProductName"]}
                      fieldKey={[field.fieldKey, "ProductName"]}
                      rules={[
                        {
                        required : true,
                        message : "Enter the product name"
                        }
                      ]}
                    >
                      <Input placeholder="ProductName" />
                    </Form.Item>
                  </Col>
                  <Col span ={6}>
                    <Form.Item
                      name={[field.name, "ProductSubType"]}
                      fieldKey={["ProductName", "ProductSubType"]}
                     
                    >
                      <Input placeholder="ProductSubType" />
                    </Form.Item>
                  </Col>
                  <Col span ={6}>
                  <Form.Item
                    name={[field.name, 'count']}
                    label = 'count'  
                    rules={[
                    {
                     type: 'number',
                    
                     min: 0,
                     max: 50000,
                    },
                ]}
                >
        <InputNumber style ={{width:"100%"}} />
      </Form.Item>
                  </Col>
                  <Row style={{paddingLeft:20}}> 

                  </Row>
                  <Col flex="none" span={8}>
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Col>
                </Row>
              ))}
              <Row style = {{paddingTop:20}}>
                  <Col span={6}></Col>
                  <Col span={8}>
              <Form.Item>
                  

              
                  <Col>
                  
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: "100%" }}
                >
                  <PlusOutlined /> Add Products
                </Button>
                </Col>
              </Form.Item>
              </Col>
              </Row>
             
             
            </div>
          );
        }}
      </Form.List>

    //   </Form>
);
}
export default AddNewProduct