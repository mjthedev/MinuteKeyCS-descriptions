import React from 'react';
import {Link} from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Container, Card, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch} from 'react-redux';







const Login = () => {
    return (

        <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '45rem', marginTop: 80}}>
            <Card.Header>
                <Card.Body>
                                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="Enter username" />
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Keep me logged in" />
                            </Form.Group>
                            <Container >
                               <Link to='/signup'>
                                <Button style={{float:'right', marginLeft:10}} variant="success" as='button' type="submit">Sign Up</Button>
                                </Link>
                               <Link>
                                <Button style={{float:'right'}} variant="primary" type="submit">Login</Button>
                               </Link> 
                                
                              
                            </Container>
                        </Form>
                </Card.Body>
            </Card.Header> 
        </Card>
    )
}


export default Login;