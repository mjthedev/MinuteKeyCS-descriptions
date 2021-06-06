import React from 'react';
import {FaRegCopy} from 'react-icons/fa';
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Card} from "react-bootstrap";
import Year from '../../buttons/year';
import Make from '../../buttons/make';
import Model from '../../buttons/model';
import copyText from '../../functions/copytext';
import { useSelector} from 'react-redux'







function AutoLockoutKey() {

  const theYear = useSelector(state => state.year.value)
  const theMake = useSelector(state => state.make.value)
  const theModel = useSelector(state => state.model.value)
  
    

    return (
      <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
        <Card.Header as="h1"> Auto <FaRegCopy size={30} onClick={() =>  copyText()}/></Card.Header>
        <Card.Body>
          <Card.Title as="h3" >Description</Card.Title>
          <Card.Text id='description'>
          <br/>
<<<<<<< HEAD
          <strong>QUOTE FOR AUTO KEY & LOCKOUT</strong> <br/>
           Customer is locked out of vehicle and would like to have a key made for the same vehicle.<br/>
           VEHICLE: {lockoutYear} {lockoutMake} {lockoutModel}
=======
          <strong>QUOTE FOR AUTO KEY & LOCKOUT</strong><br/>
          <br/>
           Customer is locked out of vehicle and would like to have a key made for the same vehicle.<br/>
           <span className="h5">VEHICLE: {theYear} {theMake} {theModel}</span>
>>>>>>> eabeb77604ed7d55e6dfe444fb078bc02ed42aaf
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