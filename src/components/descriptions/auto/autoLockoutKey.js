import React from 'react';
import {FaRegCopy} from 'react-icons/fa';
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Card, Button} from "react-bootstrap";
import Year from '../../buttons/year';
import Make from '../../buttons/make';
import Model from '../../buttons/model';
import copyText from '../../functions/copytext';
import { useSelector} from 'react-redux'







function AutoLockoutKey() {

  const lockoutYear = useSelector(state => state.year.value)
  const lockoutMake = useSelector(state => state.make.value)
  const lockoutModel = useSelector(state => state.model.value)
  
    

    return (
      <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
        <Card.Header as="h1"> Auto <FaRegCopy size={30} onClick={() =>  copyText()}/></Card.Header>
        <Card.Body>
          <Card.Title as="h3" >Description</Card.Title>
          <Card.Text id='description'>
          <br/>
          <strong>QUOTE FOR AUTO KEY & LOCKOUT</strong> <br/>
           Customer is locked out of vehicle and would like to have a key made for the same vahicle.<br/>
           VEHICLE: {lockoutYear} {lockoutMake} {lockoutModel}
          </Card.Text>
          <Year/>
          <Make/>
          <Model/>
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoLockoutKey;
    // AutoLockout