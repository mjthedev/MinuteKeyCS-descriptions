
import React from 'react';
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import './descriptions.css'
import logo from './mkLogo.png'








function EntirePage() {

    // let words = document.getElementById('')

       return (
           <>
     
    <Container fluid>

  <Container fluid style={{backgroundColor:"white", height: 100}}>
      <img src={logo} className="mt-2"></img>
  </Container>
        <Container style={{ paddingTop:80, zIndex:5}}>
            <Row className="justify-content-md-center">
            <Col md={1}>
            
            <Dropdown>
                <Dropdown.Toggle variant="warning" id="dropdown-basic"> Auto</Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    <Link to="/autokey">
                        <Dropdown.Item as="button" >AutoKey </Dropdown.Item>
                    </Link>

                    <Link to="/autolockout">
                        <Dropdown.Item as="button" >Auto Lockout</Dropdown.Item>
                    </Link>

                    <Link to="/autolockoutkey">
                        <Dropdown.Item as="button">Auto Lockout & Key</Dropdown.Item>
                    </Link>

                    <Link to="/autoignition">
                        <Dropdown.Item as="button">Auto Ignition</Dropdown.Item>
                    </Link>
                          
                            
                </Dropdown.Menu>
        </Dropdown>

        </Col>

            
            
        <Col md={1}> 
            <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-home"> Home</Dropdown.Toggle>
                <Dropdown.Menu>

            <Link to="/homelockout">
                <Dropdown.Item as="button">Home/Apartment Lockout</Dropdown.Item>
            </Link>

            <Link to="/homelockchange">
                <Dropdown.Item as="button">Home/Apartment Lock Change</Dropdown.Item>
            </Link>

            <Link to="/homerekey">
                <Dropdown.Item as="button">Home/Apartment Rekey</Dropdown.Item>
            </Link>

            <Link to="/homelockinstall">
                <Dropdown.Item as="button">Home/Apartment Lock Installation</Dropdown.Item>
            </Link>
                                
                                
                                
                                
                </Dropdown.Menu>
            </Dropdown>
            </Col>
        <Col md={1}> 
            <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-business/office"> Business</Dropdown.Toggle>
                <Dropdown.Menu>

                    <Link to="/businesslockout">
                        <Dropdown.Item as="button">Business Lockout</Dropdown.Item>
                    </Link>

                    <Link  to="/businesslockchange">
                        <Dropdown.Item as="button">Business Lock Change</Dropdown.Item>
                    </Link>
                               
                    <Link to="/businesslockinstall">
                        <Dropdown.Item as="button">Business Lock Installation</Dropdown.Item>
                    </Link>

                    <Link to="/businessrekey">
                        <Dropdown.Item as="button">Business Rekey</Dropdown.Item>
                    </Link>

                </Dropdown.Menu>
            </Dropdown>
            </Col>

            <Col className="ml-4" md={1}> 
            <Dropdown>

            <Dropdown.Toggle variant="warning" id="dropdown-other"> Others</Dropdown.Toggle>
                <Dropdown.Menu>

                        <Link to="/basicsafelockout">
                            <Dropdown.Item as="button">Safe Unlock</Dropdown.Item>
                        </Link>

                        <Link to="/highendsafelockout">
                            <Dropdown.Item as="button">High End Safe Unlock</Dropdown.Item>
                        </Link>

                        <Link to="storagefacilitylockpop">
                            <Dropdown.Item as="button">Storage Facility Lock Pop</Dropdown.Item>
                        </Link>
                        
                </Dropdown.Menu>
            </Dropdown>
            </Col>
            </Row>
        </Container>
      </Container>
    </>
           
        )
    
}



export default EntirePage


// <div className="container">
// <div className="row">
//         <div className="col">dropdown</div>
//         <div className="col">description</div>
// </div>
// </div> 