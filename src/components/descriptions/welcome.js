import React from 'react';
import "bootstrap/dist/js/bootstrap.bundle.js"
import {Card} from "react-bootstrap"









function Welcome() {


    return (
      <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '45rem', marginTop: 20}}>
        <Card.Header as="h1">Welcome!</Card.Header>
        <Card.Body>
          <Card.Title as="h3" > Minute Key Customer Service Descriptions</Card.Title>
          <Card.Text id='welcome'>
           <strong>Directions:</strong> <br/>
           <br/>
           
            To effeciently use this program you'll need to select an option from the dropdowns above.<br/>
            Once selected, if Auto is chosen you'll also need to fill in the vehicles year,<br/>
            make and model with the dropdown options provided.<br/>
            When the correct information is available on the screen,<br/>
            you can then copy the information by clicking the copy icon on the page.<br/>
            <br/>
            Now you can use the copied information anywhere you'd like!<br/>
            Enjoy!
          </Card.Text>
        </Card.Body>
      </Card>
    )
    
    
};



export default Welcome;
    // AutoLockout
