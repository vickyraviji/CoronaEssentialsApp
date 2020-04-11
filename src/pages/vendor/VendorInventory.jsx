import React, {Component} from 'react';
import {Layout} from 'antd';
import SiderMenuVendor from '../../components/SiderMenuVendor';
import  '../../css/mycss.css'
import 'antd/dist/antd.css';
import {Form,Button} from 'antd';
import Products from'../../components/sellerpage/productsupdtate'

import AddNewProduct from '../../components/sellerpage/addProduct';
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

  const onFinish = (values) => {
    console.log(values)
      let final_items;
      let DB_final = [];
      
     final_items = Object.keys(values)
    console.log(Object.entries(values["Masks"]))
  let isNewProductPresent = false;
   final_items.forEach((product,index)=>{
     DB_final[index] = {}
     DB_final[index].title = product
     console.log("The db final object",DB_final);
    DB_final[index]["products"] = [];
    
    if(product!=="NewProducts")
    {
     console.log("Main Product :"+product)
     Object.keys(values[product]).map((subproduct,index1)=>{
      DB_final[index].products[index1] = {}
          DB_final[index].products[index1].subtype = subproduct
           console.log("Sub product ["+index1+"]"+subproduct)
           console.log("Count : "+values[product][subproduct].count)
           DB_final[index].products[index1].count = values[product][subproduct].count
     })
    }
    else
    {
      isNewProductPresent = true;
    }
   })
  
   if(isNewProductPresent){
    console.log("yepppp")
    console.log("Keys of Np : ",values["NewProducts"])
    values["NewProducts"].forEach((newProduct) => {
      let productIndex = DB_final.findIndex((entry) => entry.title == newProduct.ProductName);
      if(productIndex != -1){
        DB_final[productIndex].products.push({
            "subtype": newProduct.ProductSubType,
            "count": newProduct.count
        })
      }
      else{
        DB_final.push({
          title: newProduct.ProductName,
          products: [{
            "subtype": newProduct.ProductSubType,
            "count": newProduct.count
          }]
        })
      }
    })
   
   }

   console.log("The final Array is :",DB_final)
  }
 
class VendorInventory extends Component {
   
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <SiderMenuVendor />
                <Content>
                    <div>
                    <div>
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        {
                        Input.map((product )=>
                        <Products
                        Parentname = {product.title}
                        products = {product.products}
                       
                        />
                        
                    )
                    }
                    <AddNewProduct/>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" >
                      Submit
                    </Button>
                  </Form.Item>
                    </Form>
                      
                    </div>
                   
                    </div>
                </Content>
            </Layout>
        );
    }
}

export default VendorInventory;