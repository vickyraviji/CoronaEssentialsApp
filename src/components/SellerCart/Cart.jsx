import React from 'react'

import  '../../css/mycss.css'
import 'antd/dist/antd.css';

import { Col, Row } from "antd";

const viewProducts = props=>{
  const{
    Parentname,
    products
 }=props;

   
    return (
      
    <div >
    
    <Row style = {{paddingTop : 40,paddingLeft : 40}}>
    
    <Col span={8}>
                    <font className = "font-product">{Parentname}</font> 
            </Col>  
            <Col span ={8}></Col>
            <Col span ={8}></Col>
           
    </Row>
    
    {
      products.map((product)=>{
        return (
        <Row style={{paddingTop : 15}}>
        <Col span={1}>
    
             </Col>
             <Col span={6}>
             
       {product.subtype} 
           
         
             </Col><Col span = {2}>:</Col> <Col span = {2}>10</Col>
          <Col span={18}></Col>
            
         </Row>
         )
    

      })
    }
   
   
     </div>
  );

};

export default viewProducts