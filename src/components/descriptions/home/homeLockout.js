import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Card} from "react-bootstrap";
import {FaRegCopy} from 'react-icons/fa';
import './descriptions.css';
import copyText from '../../functions/copytext';


function HomeLockout() {

    return (  
        <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
          <Card.Header  as="h1"> Home <FaRegCopy size={30} onClick={() =>  copyText()}/></Card.Header>
            <Card.Body>
              <Card.Title as="h3" >Description</Card.Title>
                  <Card.Text id='description'>
                    <br/>
                 <strong>HOME/APARTMENT LOCKOUT</strong><br/>
                 <br/>
                  Customer is locked out of home/apartment and needs immediate assistance!
                  </Card.Text>
        </Card.Body>
      </Card>
    )
    
    
};



export default HomeLockout;
    
