import React, { useState } from "react";
import Popup from "reactjs-popup";
import {Button,Row,Col} from 'antd';
import { Link, useHistory } from "react-router-dom";

const DocumentPopup = (props) => {
  
     let toggle_variable = false;  //DB variable
      const [isModalVisible,updateModalVisibility] = useState(false);
    
      const history = useHistory();

      const OpenDocs = ()=>{  
        history.push("/UploadDocs")
      }
      const whichPage=()=>{
        history.push("/VendorInventory")
      }

    const openModal = () => {
      updateModalVisibility(true);
    }
    const closeModal = () => {
      updateModalVisibility(false);
    }
    let popup_toggle;
    if(toggle_variable){
      
      popup_toggle =  <div> <Row><Col span = {4}><Button type="primary" htmlType="submit" onClick={openModal} >
          Edit
        </Button></Col><Col span ={3}></Col><Col span={6} style={{paddingLeft:10}}>
        <Button type="primary" htmlType="submit" onClick={OpenDocs} >
        Upload Documents
       </Button></Col></Row>
          <Popup
            open={isModalVisible}
            closeOnDocumentClick
            onClose={closeModal}
          >
            <div className="modal">
              <Row>
              Please Upload the Necessary documents 
              </Row>
            
             <Row>
              <Col span={2}></Col>
              <Col> Neccessary Docs :  For Eg </Col>
              
             </Row>
             <Row>
             <Col span={4}></Col>
               <Col span={8}>
                 1. w9 form
                
               </Col>
             </Row>

             <Row>
             <Col span={4}></Col>
               <Col span={8}>
                 2. ss4 form  
                
               </Col>
             </Row>


            </div>
            <div>
              <Row>
                <Col span={8}></Col>
                <Col span={12}></Col>
                <Col span={4}>
                <Button type="primary" htmlType="submit" onClick={closeModal} >
         Okay
        </Button>
                </Col>
              </Row>
          
            </div>
          </Popup>
          </div>
    }
    else{
      
      popup_toggle = <div> <Row> <Col span={8}></Col><Col span={4}></Col><Col span = {4}><Button type="primary" htmlType="submit" onClick={whichPage} >
      Edit
    </Button></Col><Col span={6}>
    <Button type="primary" htmlType="submit" onClick={OpenDocs} >
    Add Documents
   </Button></Col></Row></div> 
      
    }
    return (
      <div>
      {popup_toggle}
      </div>
    );
      
  }
export default DocumentPopup  