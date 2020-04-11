import React, { useEffect, useState } from 'react';
//import useHistory from 'react-router-dom'
import { Link, useHistory } from "react-router-dom";
import "../../css/mycss.css"
import { Col,Row } from 'antd';
import 'antd/dist/antd.css';
import { Card,Avatar,Button } from 'antd';
import { calculateDistance } from '../../scripts/distance_calculation';
const { Meta } = Card;



const CardComp = props =>{

  const history = useHistory()
    const {
        lat,
        lon,
        Name,
    } = props;

   

    console.log("Props are :",props)
    const [distance,updateDistance] = useState(undefined);
    
    const whichPage = Name=>{
      console.log("clicked ",Name);
       
      history.push('/VendorInfo')
    }
 

    useEffect(() => {

      let lon1,lat1;
      let Promises = new Promise((succeed,fail)=>{
        window.navigator.geolocation.getCurrentPosition(function(pos) {
          console.log(pos); 
           console.log("After the position "+pos)
            lon1 = pos.coords.longitude
           lat1 = pos.coords.latitude
           succeed()
            })
      })
      
       console.log(lon1+"   "+lat1)
        // let lon1 = 80.23//pos.coords.longitude
        // let lat1 = 13.11
        Promises.then(()=>{
          if(distance === undefined){
            console.log("Lat ",lat)
            console.log("Long ",lon)
            console.log("Lat1",lat1)
            console.log("Long1 ",lon1)
            
            updateDistance(calculateDistance(lat,lon,lat1,lon1))
        }
        })
      
    },[lon,lat])

    return(
      
        
        <div className = "row-form">
        <div className = "container-fluid.row" >
        <Card
        hoverable
        className = "vendorDisplayCard"
        //cover={<img alt="example" src={props.imgsrc} className="card-img-top"/>}
      >
         <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="card-img-top"/>}
      title={Name}
      description="Ranked 10th in global market"
     
    /><br></br>
    <Card type="inner" title="Description" extra={<Button onClick ={ ()=>{whichPage(Name)}}>Explore</Button>} >
      <Row><p>Product Name : Mask A</p></Row>
      <Row><p>Status : <span className = "font-format"><font color ="green">Instock</font></span></p></Row>
      <Row><p>Distance : {distance} km</p></Row>
    </Card>
   
      </Card>
      </div>
      </div>
      
    )
    
};

export default CardComp;

