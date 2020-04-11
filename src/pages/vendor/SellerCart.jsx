import React,{Component} from 'react'
import {Layout} from 'antd'
import {Row,Col} from 'antd'
import '../../css/mycss.css';
import ProductInventory from '../../components/SellerCart/Cart'
import Popup from '../../components/SellerCart/DocumentPopup'
import SiderMenuAdmin from '../../components/SiderMenuAdmin';
//import { Content } from 'react-bootstrap/lib/Tab';
const {Content} = Layout;
const Input = [
    {
       
            title: "Masks",
            
            products: [{
                subtype : "SurgicalMask",
               count : 30,
                
            },
            {
                subtype : "N95mask",
                count : 50
            }
        ]
        
    },
    {
       
        title: "Suits",
        
        products: [
            {
                subtype : "Gowns",
                count : 5
            },
           {
                    subtype :"DoctorSuits",
                    count : 10
           }
        
    ]
    
},

{
  title: "Ventilators",
    
    products: [
        
            {
                subtype : "Gowns",
                count : 5
            },
           

    ]
}


]


 const  Cart = ()=>{
        return(
            
                <Layout style={{ minHeight: '100vh' }}>
               
                    <SiderMenuAdmin/>
                <Content>
                    <div>
                    
                    <Row style = {{paddingTop : 40,paddingLeft : 40}}>
               
        
               <Col span = {8}>
               <font className = "font-heading">My Cart</font></Col>
                <Col span={4}></Col>
                <Col span ={12}>  <div className = "popup-format">
                    <Popup/>
                </div></Col>
                </Row>
               
              
                
               
               
                
                <div>
                    {
                Input.map((product )=>
                <ProductInventory
                Parentname = {product.title}
                products = {product.products}
               
                />
                
            )
            }
                </div>
               </div>
                </Content>
               
            </Layout>
        )
}

export default Cart;