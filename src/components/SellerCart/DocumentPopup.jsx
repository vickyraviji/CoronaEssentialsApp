import React from "react";
import Popup from "reactjs-popup";
import {Button,Row,Col} from 'antd';
class DocumentPopup extends React.Component {
    constructor(props) {
      super(props);
     
     
      let bool = false;   //from DB
     
      this.state = { open: false,toggle:bool };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
   
    openModal() {
      this.setState({ open: true });
    }
    closeModal() {
      this.setState({ open: false });
    }
   
    render() {
      const toggle = this.state.toggle
      console.log("Toggle :"+toggle)
      let popup_toggle;
      if(toggle)
      {
          popup_toggle =  <div> <Button type="primary" htmlType="submit" onClick={this.openModal} >
          Edit
        </Button>
          <Popup
            open={this.state.open}
            closeOnDocumentClick
            onClose={this.closeModal}
          >
            <div className="modal">
              <Row>
              Please Upload the Necessary documents to this Mail Id (Link below)
              </Row>
              <Row>
              @adam.gmail.com
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
                <Button type="primary" htmlType="submit" onClick={this.closeModal} >
         Okay
        </Button>
                </Col>
              </Row>
          
            </div>
          </Popup>
          </div>
      }
      else{
        popup_toggle =  <Button type="primary" htmlType="submit" onClick={console.log("hey")} >
        Edit
       </Button>
        
      }
      return (
        <div>
        {popup_toggle}
        </div>
      );
    }
  }
export default DocumentPopup  