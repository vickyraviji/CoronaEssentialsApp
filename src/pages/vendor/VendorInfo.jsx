import React from 'react';
import {Layout} from 'antd';
import SiderMenuVendor from '../../components/SiderMenuVendor';
import 'antd/dist/antd.css';
import comp_image from '../../images/company.jpg'
import { List, Avatar, Row,Col } from 'antd';
import  '../../css/mycss.css'
import MainList from '../../components/customer_inventory/ListsVendor'
import ProductInventory from '../../components/SellerCart/Cart'
import { Card } from 'antd';
import Grid from 'antd/lib/card/Grid';
const { Meta } = Card;

const {Content} = Layout;
var Name_of_organisation = "Athena Technologies"
var Emailid = "Athena@gmail.com"
var Contact_number = "567890"
var Place = "chennai"
var Image = comp_image;

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
class VendorInfo extends React.Component {
    
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenuVendor />
                <Content>
                <Row style = {{paddingTop : 20,paddingLeft : 10}}>
                <Col span={4}>
                                <font className = "font-heading">About Us</font> 
                        </Col>  
                       
                
                            <Col span={10}></Col>
                            <Col span={6}></Col>
                            </Row>
                
                   
 
             <Row>
                <Col span ={8}>
               <div className = "row-form">
                 <MainList 
                 name = {Name_of_organisation} 
                 emailid = {Emailid}
                 number = {Contact_number}
                 place = {Place}
                 />
                 </div>
                 
                 </Col>
                 <Col span={8}></Col> 
                 <Col span = {8} style = {{paddingRight:10}}>
                 
                 <div className = "container-fluid.row" >
         <Card
         hoverable
         className = "vendorDisplayCard"
         cover={<img alt="example" src={comp_image} className="card-img-top"/>}
       >
          <Meta
       
       title={Name_of_organisation}
       description="Ranked 10th in global market"
      
     /><br></br>
     <Card type="inner" title="Description"  >
     Athena Technologies was a developer and manufacturer of control and navigation solutions for unmanned aerial 
     vehicles (UAVs) 
     </Card>
    
       </Card>
       </div>
 
         </Col>
     </Row>

     <Row style = {{paddingTop : 20,paddingLeft : 10}}>
         <Col span= {8}>
         <div className = "row-form">  <div className = "font-heading">List Of Produts</div></div></Col></Row>
        <Row style = {{paddingTop : 20,paddingLeft : 5}}>
            <Col span ={24} style={{paddingLeft:10}}>
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
                
         </Col>
     </Row>
 
                </Content>
            </Layout>
        );
    }
}

export default VendorInfo;