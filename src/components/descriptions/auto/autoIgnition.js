import React from 'react';
import {FaRegCopy} from 'react-icons/fa';
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Card, Button} from "react-bootstrap";
import Year from '../../buttons/year';
import Make from '../../buttons/make';
import Model from '../../buttons/model';
import copyText from '../../functions/copytext';






function AutoIgnition() {

  let [year, setYear] = React.useState('')
  let [make, setMake] = React.useState('')
  let [model, setModel] = React.useState('')

    return (
      <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
        <Card.Header as="h1"> Auto <FaRegCopy size={30} onClick={() =>  copyText()}/></Card.Header>
        <Card.Body>
          <Card.Title as="h3" >Description</Card.Title>
          <Card.Text id='description'>
           <br/>
           AUTO IGNITION <br/>
           Customer has key locked/broken in the ignition and/or would simply like to have ignition replaced.<br/>In need of immediate assistance.<br/>
           VEHICLE: 
          </Card.Text>

          <Year/>
          <Make/>
          <Model/>
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoIgnition;
    // AutoLockout
