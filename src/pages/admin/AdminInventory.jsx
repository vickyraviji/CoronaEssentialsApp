import React,{Component} from 'react';
import  { useEffect, useState } from 'react';
import {Layout} from 'antd';
import SiderMenuAdmin from '../../components/SiderMenuAdmin';
import CardComp from '../../components/customer_inventory/CardComp'
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import Cascader from '../../components/customer_inventory/Cascader'

const {Content} = Layout;
const vendorData = [
    {
        title: "Amazon",
        city : "Chennai",
        lat: 41,
        lon: -70,
        products: {
            "facemask": 30,
            "gloves": 50,
        },
        image : "Image"
    },
    {
        title: "Uber",
        city : "pondicherry",
        lat: 50,
        lon: 90,
        products: {
            "facemask": 30,
        }
    },
    {
        title: "Flipper",
        city : "cuddalore",
        lat: 40,
        lon: 80,
        products: {
            "gloves": 50,
            "n95masks" : 40,
        }
    },
    {
        title: "Zomato",
        city : "new york",
        lat: 20,
        lon: 50,
        products: {
            "doctorsuits": 30,
            "gowns": 50,
            "ventilators" :70,
        }
    },
]


 const Cards = props => {
    const vendors = vendorData;

    const [filterProduct,updateFilterProduct] = useState(undefined);

    const onProductSelection = (value) => {
        console.log(value[0])
        if(value[1]===undefined)
        {
        updateFilterProduct(value[0])
        }
        else
        {
            updateFilterProduct(value[1])  
        }
    }
    console.log("onPRODUCTSelection : ",onProductSelection)
    console.log("The filter is ",filterProduct);

    let displayVendors;

    if(filterProduct !== undefined){
        displayVendors = vendorData.filter((vendor) => vendor.products[filterProduct] !== undefined)
    }
    else{
        displayVendors = vendorData
    }

            return(
                <div>
                
                <div className="site-card-wrapper">
                <Row gutter={24}>
                    
                    <Col span={18} style={{paddingTop:10,paddingLeft:5}}>
                    <font className = "font-header"> What are you looking for...?</font> 
                   </Col>  
                   
                    
                   <Col span = {6}>
                <div className = "cascader-format">
                    <Cascader className="cascader" onProductSelection={onProductSelection}/>
                </div> </Col>
                </Row>
                <Row gutter={24}>
                    {
                        displayVendors.map((vendor) => 
                        <Col span={10}>
                            <CardComp 
                                imgsrc = {vendor.image} 
                                lat={vendor.lat} 
                                lon={vendor.lon}  
                                Name = {vendor.title} 
                                city ={vendor.city}
                                
                                
                                />

                        </Col>
                        )
                    }

                </Row>
                </div>
                </div>
                
    );
};


class AdminInventory extends React.Component {
    render() {
      
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenuAdmin />
                <Content>
                   <Cards/>
                </Content>
            </Layout>
        );
    }
}

export default AdminInventory;