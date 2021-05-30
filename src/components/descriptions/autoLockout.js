import React from 'react';
import {FaRegCopy} from 'react-icons/fa'
import "bootstrap/dist/js/bootstrap.bundle.js"
import {Card, Button} from "react-bootstrap"





function AutoLockout() {



    return (
        <Card>
        <Card.Header as="h1">Auto</Card.Header>
        <Card.Body>
          <Card.Title as="h3" >Auto Key Description</Card.Title>
          <Card.Text id='autolockout-description'>
           AUTO KEY MADE- <br/>
           Customer is locked out of vehicle and would like immediate assistance<br/>
           VEHICLE: 
          </Card.Text>
          <FaRegCopy  size={30} onClick={() =>  navigator.clipboard.writeText(document.getElementById('autolockout-description').textContent)}/>
          
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoLockout;
    // AutoLockout
