
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
     
   

  <Container fluid style={{backgroundColor:"white", height: 100}}>
      <img src={logo} alt="random" className="mt-2"></img>
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