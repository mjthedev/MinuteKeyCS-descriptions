import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {Container, Row, Col, Dropdown} from 'react-bootstrap';


import AutoKey from "./displayBox";




function EntirePage() {

       return (
        <Container>
                <Container>
            <Row>
            <Col>
            
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic"> Auto</Dropdown.Toggle>


            <Dropdown.Menu>
                 
                        <Dropdown.Item as="button" onClick={() => AutoKey}>Auto Key</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Auto Lockout</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Auto Ignition</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Auto Lockout & Key</Dropdown.Item>



                
            </Dropdown.Menu>
        </Dropdown>

        </Col>

            
            
            <Col> 
                    <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-home"> Home</Dropdown.Toggle>
                        <Dropdown.Menu>
                                        <Dropdown.Item>Home/Apartment Lockout</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Home/Apartment Rekey</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Home/Apartment Lock Installation</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Home/Apartment Lock Change</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
            </Col>
            <Col> 
            <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-business/office"> Business/Office</Dropdown.Toggle>
                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-2">Business/Office Lockout</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Business/Office Rekey</Dropdown.Item>
                                <Dropdown.Item href="#/action-1">Business/Office Lock Installation</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Business/Office Lock Change</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </Col>
            <Col> 
            <Dropdown>

            <Dropdown.Toggle variant="success" id="dropdown-basic"> Others</Dropdown.Toggle>
                <Dropdown.Menu>

                            <Dropdown.Item href="#/action-1">Safe Unlock</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Storage Facility Lock Pop</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Something else</Dropdown.Item>
                            <Dropdown.Item href="#/action-1">Something else</Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            </Col>
            </Row>
        </Container>
      </Container>
           
        )
    
}



export default EntirePage


// <div className="container">
// <div className="row">
//         <div className="col">dropdown</div>
//         <div className="col">description</div>
// </div>
// </div>