import React, {useState} from 'react';

import "bootstrap/dist/js/bootstrap.bundle.js"
import {Card, Button} from "react-bootstrap"





function AutoKey() {



    return (
        <Card>
        <Card.Header as="h1">Auto</Card.Header>
        <Card.Body>
          <Card.Title as="h3" id='words'>Auto Key Description</Card.Title>
          <Card.Text>
           
          </Card.Text>
          <Button variant="primary">Do Something</Button>
          <button 
  onClick={() =>  navigator.clipboard.writeText(document.getElementById('words').textContent)}
>
  Copy
</button>
        </Card.Body>
      </Card>
    )
    
    
}

export default AutoKey;