import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.js"
import {Card} from "react-bootstrap"
import {FaRegCopy} from 'react-icons/fa'
import './descriptions.css'


function BusinessLockInstall() {

    return (  
        <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
          <Card.Header  as="h1"> Business</Card.Header>
            <Card.Body>
              <Card.Title as="h3" >Description</Card.Title>
                  <Card.Text id='description'>
                  <br/>
                  BUSINESS LOCK INSTALLATION<br/>
                  Customer needs immediate assistance getting one or more locks installed at a business estabishment.
                  </Card.Text>
                  <FaRegCopy  size={30} onClick={() =>  navigator.clipboard.writeText(document.getElementById('description').textContent)}/>
        </Card.Body>
      </Card>
    )  
};
export default BusinessLockInstall;
    
