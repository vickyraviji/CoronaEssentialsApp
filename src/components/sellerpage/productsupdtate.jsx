import React from 'react'
import  '../../css/mycss.css'
import 'antd/dist/antd.css';

import { Form, Input, Button,InputNumber, Col, Row } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";



const rules = [{ required: true }];

 
// //const DynamicFieldSet = () => {
//   const onUpdateProducts = values => {
//     console.log("Received values of form:", values);
//   };



const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
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


  

const Products = props=>{
  const{
    Parentname,
    subname1,
    subname2,
    products
 }=props;

    // const onFinish = (values) => {
  
    //     console.log("hii")
    //     console.log(values);
      
    // }
    return (
      
    <div>
    {/* // <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}> */}
    
    <Row style = {{paddingTop : 40,paddingLeft : 40}}>
    <Col span={8}>
                    <font className = "font-product">{Parentname}</font> 
            </Col>  
            <Col span ={8}></Col>
            <Col span={8}></Col>
    </Row>
    
    {
      products.map((product)=>{
        return (<Row style={{paddingTop : 20}}>
        <Col span={1}>
    
             </Col>
             <Col span={8}>
             <Form.Item
            name={[Parentname,product.subtype, 'count']}
            label={product.subtype}
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
             <Col span={18}>
             </Col>
         </Row>)
    

      })
    }
   
     {/* <Row style={{paddingTop : 20}}>
    <Col span={1}>

         </Col>
         <Col span={8}>
         <Form.Item
        name={[{subname2}, 'count']}
        label={subname2}
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
         <Col span={18}>
         </Col>
     </Row>
    
     */}

    



 {/* 

    //  <Row style = {{paddingTop : 20,paddingLeft : 40}}>
    // <Col span={8}>
    //                 <font className = "font-product"> Gloves</font> 
    //         </Col>  
    //         <Col span ={8}></Col>
    //         <Col span={8}></Col>
    // </Row>
    // <Row style={{paddingTop : 20}}>
    // <Col span={1}>

    //      </Col>
    //      <Col span={8}>
    //      <Form.Item
    //     name={['gloves', 'count']}
    //     label="Gloves"
    //     rules={[
    //       {
    //         type: 'number',
    //         min: 0,
    //         max: 50000,
    //       },
    //     ]}
    //   >
    //     <InputNumber style ={{width:"100%"}} />
    //   </Form.Item>
    //      </Col>
    //      <Col span={18}>
    //      </Col>
    //  </Row>
     
    //  <Row style = {{paddingTop : 20,paddingLeft : 40}}>
    // <Col span={8}>
    //                 <font className = "font-product"> Suits</font> 
    //         </Col>  
    //         <Col span ={8}></Col>
    //         <Col span={8}></Col>
    // </Row>
    // <Row style={{paddingTop : 20}}>
    // <Col span={1}>


    //      </Col>
    //      <Col span={8}>
    //      <Form.Item
    //     name={['doctorsuits', 'count']}
    //     label="Doctor Suits"
    //     rules={[
    //       {
    //         type: 'number',
    //         min: 0,
    //         max: 50000,
    //       },
    //     ]}
    //   >
    //     <InputNumber style ={{width:"100%"}} />
    //   </Form.Item>
    //      </Col>
    //      <Col span={18}>
    //      </Col>
    //  </Row>
    //   <Row style={{paddingTop : 20}}>
    // <Col span={1}>


    //      </Col>
    //      <Col span={8}>
    //      <Form.Item
    //     name={['gowns', 'count']}
    //     label="Gowns"
    //     rules={[
    //       {
    //         type: 'number',
    //         min: 0,
    //         max: 50000,
    //       },
    //     ]}
    //   >
    //     <InputNumber style ={{width:"100%"}} />
    //   </Form.Item>
    //      </Col>
    //      <Col span={18}>
    //      </Col>
    //  </Row>
     


    
    //  <Row style = {{paddingTop : 20,paddingLeft : 40}}>
    // <Col span={8}>
    //                 <font className = "font-product"> Ventilators</font> 
    //         </Col>  
    //         <Col span ={8}></Col>
    //         <Col span={8}></Col>
    // </Row>
    // <Row style={{paddingTop : 20}}>
    //      <Col span={1}>

    //      </Col>
    //      <Col span={8}>
    //      <Form.Item
    //     name={['ventilators', 'count']}
    //     label="Ventilators"
    //     rules={[
    //       {
    //         type: 'number',
    //         min: 0,
    //         max: 50000,
    //       },
    //     ]}
    //   >
    //     <InputNumber style ={{width:"100%"}} />
    //   </Form.Item>
    //      </Col>
    //      <Col span={18}>
    //      </Col>
    //  </Row> */}
     
    
    
      


     </div>
  );

};

export default Products;





