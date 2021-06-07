import React from 'react';
import {Link} from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Container, Card, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch} from 'react-redux';





const Complete = () => {
    return (
        <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '40rem', marginTop: 150}}>
        <Card.Header>
            <Card.Body >
                <Card.Text className='text-center'>Thank you for signing up. <br/>You can now log in using the username and password provided.</Card.Text> 
            </Card.Body>
        </Card.Header> 
    </Card>
    )
}


export default Complete;