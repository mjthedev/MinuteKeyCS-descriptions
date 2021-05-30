import React from 'react';
import {FaRegCopy} from 'react-icons/fa'
import "bootstrap/dist/js/bootstrap.bundle.js"
import {Card, Button} from "react-bootstrap"





function AutoLockoutKey() {



    return (
        <Card>
        <Card.Header as="h1">Auto</Card.Header>
        <Card.Body>
          <Card.Title as="h3" >Auto Key Description</Card.Title>
          <Card.Text id='autolockoutkey-description'>
           AUTO KEY MADE- <br/>
           Customer is locked out of vehicle and would like to have a key made for the same vahicle <br/>
           VEHICLE: 
           
    
          </Card.Text>
          <FaRegCopy  size={30} onClick={() =>  navigator.clipboard.writeText(document.getElementById('autolockoutkey-description').textContent)}/>
          
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoLockoutKey;
    // AutoLockout