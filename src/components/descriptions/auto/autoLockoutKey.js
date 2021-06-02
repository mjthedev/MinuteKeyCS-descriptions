import React from 'react';
import {FaRegCopy} from 'react-icons/fa'
import "bootstrap/dist/js/bootstrap.bundle.js"
import {Card, Button} from "react-bootstrap"

import Year from '../../buttons/year'
import Make from '../../buttons/make'
import Model from '../../buttons/model'







function AutoLockoutKey() {

  let [year, setYear] = React.useState('')
  let [make, setMake] = React.useState('')
  let [model, setModel] = React.useState('')

    return (
      <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
        <Card.Header as="h1">Auto</Card.Header>
        <Card.Body>
          <Card.Title as="h3" >Description</Card.Title>
          <Card.Text id='description'>
          <br/>
          <stong>QUOTE FOR AUTO KEY & LOCKOUT</stong> <br/>
           Customer is locked out of vehicle and would like to have a key made for the same vahicle.<br/>
           VEHICLE: 
          </Card.Text>

          <Year/>
          <Make/>
          <Model/>
          <FaRegCopy  size={30} onClick={() =>  navigator.clipboard.writeText(document.getElementById('description').textContent)}/>
          
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoLockoutKey;
    // AutoLockout