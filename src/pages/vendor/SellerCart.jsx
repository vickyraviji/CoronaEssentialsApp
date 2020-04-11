import React,{Component} from 'react'
import {Row,Col} from 'antd'
import '../css/mycss.css';
import ProductInventory from '../components/SellerCart/Cart'
import Popup from '../components/SellerCart/DocumentPopup'

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
            <div>
            <Row style = {{paddingTop : 10,paddingLeft : 30}}>
               

                
    <Col span={8}>
                    <font className = "font-heading">Product Cart</font> 
            </Col>  
           
    
                <Col span={10}></Col>
                <Col span={6}>
                <div className = "popup-format">
                <Popup/>
            </div>
                </Col>
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
        )
}

export default Cart;