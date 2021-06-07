import React from 'react';
import {Container, Row, Col, Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { HiOutlineRefresh } from "react-icons/hi";
import {FaRegCopy} from 'react-icons/fa';
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Card} from "react-bootstrap";
import './descriptions.css';
import Year from '../../buttons/year';
import Make from '../../buttons/make';
import Model from '../../buttons/model';
import copyText from '../../functions/copytext';
import {resetYear} from '../../../app/features/year/year'
import {resetMake} from '../../../app/features/make/make'
import {resetModel} from '../../../app/features/model/model'
// import { createStore } from 'redux';
// import {theReducer} from '../../functions/runYear';
// import {samestore, stateofstore} from '../../buttons/year'

import { useSelector, 
  useDispatch 
} from 'react-redux'
// import { changeText } from '../../../app/features/year/year'



// const {type:theCarYear} = {samestore.dispatch({ type: 'updatetest1' })}



// export function theReducer(state = { year: 'its working' }, action) {
// let test1 = 'the text in the DOM1';
// let test2 = 'the text in the DOM2';
// let test3 = 'the text in the DOM3';
// let test4 = 'the text in the DOM4';
//  switch (action.type) {
//    case 'updatetest1':
//      return { year: state.year = title.innerHTML}
//      case 'updatetest2':
//      return { year: state.year = test2 }
//      case 'updatetest3':
//      return { year: state.year = test3 }
//      case 'updatetest4':
//      return { year: state.year = test4 }
//    default:
//      return state
//  }
// }

// export let store = createStore(theReducer)

// store.subscribe(() => console.log(store.getState()))

//  console.log()
 
// let theRealText = createStore(theReducer)


 

//  function vehicleYear() {
//   store.dispatch({ type: 'updateYear' })
//  }

// store.dispatch({ type: 'updatetest2' })

// let samestore = createStore(theReducer);

// let {year: theCarYear} = theRealText.getState();

// let {year: theCarYear} = samestore.getState();
// let {year: officialState} = stateofstore;



  
const AutoKey = () => {
  
    const dispatch = useDispatch()

const theYear = useSelector((state) => state.year.value)
  const theMake = useSelector((state) => state.make.value)
  const theModel = useSelector((state) => state.model.value)

  let ResetAll= () => {
      dispatch(resetYear());
      dispatch(resetMake());
      dispatch(resetModel());
}

// console.log(`this is theReducer state: ${we}`)


//  store.subscribe(() => console.log(store.getState()))
  
    return (  

           <>
    <Container fluid>

    <Container fluid style={{backgroundColor:"white", height: 100}}>
       
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
                  <Dropdown.Item as="button" className="dditems">Home/Apartment Lockout</Dropdown.Item>
              </Link>
  
              <Link to="/homelockchange">
                  <Dropdown.Item as="button" className="dditems">Home/Apartment Lock Change</Dropdown.Item>
              </Link>
  
              <Link to="/homerekey">
                  <Dropdown.Item as="button" className="dditems">Home/Apartment Rekey</Dropdown.Item>
              </Link>
  
              <Link to="/homelockrepair">
                  <Dropdown.Item as="button" className="dditems">Home/Apartment Lock Repair</Dropdown.Item>
              </Link>
  
              <Link to="/homelockinstall">
                  <Dropdown.Item as="button" className="dditems">Home/Apartment Lock Installation</Dropdown.Item>
              </Link>
                                  
                                  
                                  
                                  
                  </Dropdown.Menu>
              </Dropdown>
              </Col>
          <Col md={1}> 
              <Dropdown>
                          <Dropdown.Toggle variant="warning" id="dropdown-business/office"> Business</Dropdown.Toggle>
                  <Dropdown.Menu>
  
                      <Link to="/businesslockout">
                          <Dropdown.Item as="button" className="dditems">Business Lockout</Dropdown.Item>
                      </Link>
  
                      <Link  to="/businesslockchange">
                          <Dropdown.Item as="button" className="dditems">Business Lock Change</Dropdown.Item>
                      </Link>
                                 
                      <Link to="/businesslockinstall">
                          <Dropdown.Item as="button" className="dditems">Business Lock Installation</Dropdown.Item>
                      </Link>
  
                      <Link to="/businessrekey">
                          <Dropdown.Item as="button" className="dditems">Business Rekey</Dropdown.Item>
                      </Link>
  
                  </Dropdown.Menu>
              </Dropdown>
              </Col>
  
              <Col className="ml-4" md={1}> 
              <Dropdown>
  
              <Dropdown.Toggle variant="warning" id="dropdown-other"> Others</Dropdown.Toggle>
                  <Dropdown.Menu>
  
                          <Link to="/basicsafelockout">
                              <Dropdown.Item as="button" className="dditems">Safe Unlock</Dropdown.Item>
                          </Link>
  
                          <Link to="/highendsafelockout">
                              <Dropdown.Item as="button" className="dditems">High End Safe Unlock</Dropdown.Item>
                          </Link>
  
                          <Link to="storagefacilitylockpop">
                              <Dropdown.Item as="button" className="dditems">Storage Facility Lock Pop</Dropdown.Item>
                          </Link>
                          
                  </Dropdown.Menu>
              </Dropdown>
              </Col>
              </Row>
          </Container>
        </Container>
      
        <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
          <Card.Header  as="h1"> Auto <FaRegCopy size={30} onClick={() =>  copyText()}/><HiOutlineRefresh onClick={() => ResetAll()} style={{float:'right'}}/></Card.Header>
            <Card.Body>
              <Card.Title as="h3" >Description</Card.Title>
                  <Card.Text id='description'>
                  <br/>
                  <strong>QUOTE FOR AUTO KEY</strong><br/>
                  <br/>
                  Customer would like to have a key made for a vehicle.<br/> 
                  <span className="h5">VEHICLE: {theYear} {theMake} {theModel}</span>
                  {/* {theCarYear} {console.log(`STATE: ${stateofstore}`)} {officialState} */}
                  
                  </Card.Text>

                    <Year/>
                    <Make/>
                    <Model/>
        </Card.Body>
      </Card>
      </>
    )
    
    
};

export default AutoKey;



/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 * 
 * 
 
 */


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.


// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.



// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.

// {value: 1}




    // AutoLockout
    
    
    // navigator.clipboard.writeText(document.getElementById('description').textContent)



