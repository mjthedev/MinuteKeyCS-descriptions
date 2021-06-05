import React from 'react';
import {FaRegCopy} from 'react-icons/fa';
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Card} from "react-bootstrap";
import './descriptions.css';
import Year from '../../buttons/year';
import Make from '../../buttons/make';
import Model from '../../buttons/model';
import copyText from '../../functions/copytext';
import { createStore } from 'redux';
import {theReducer} from '../../functions/runYear';
// import {samestore, stateofstore} from '../../buttons/year'

import { useSelector, useDispatch } from 'react-redux'
import { changeText } from '../../../app/features/year/year'



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



  
function AutoKey() {

  const theYear = useSelector(state => state.year.value)
  const theMake = useSelector(state => state.make.value)
  const theModel = useSelector(state => state.model.value)
  
    

// console.log(`this is theReducer state: ${we}`)


//  store.subscribe(() => console.log(store.getState()))
  
    return (  
      
        <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
          <Card.Header  as="h1"> Auto <FaRegCopy size={30} onClick={() =>  copyText()}/></Card.Header>
            <Card.Body>
              <Card.Title as="h3" >Description</Card.Title>
                  <Card.Text id='description'>
                  <br/>
                  <strong>QUOTE FOR AUTO KEY</strong>  <br/>
                  Customer would like to have a key made for a vehicle.<br/>
                  VEHICLE: {theYear} {theMake} {theModel}
                  {/* {theCarYear} {console.log(`STATE: ${stateofstore}`)} {officialState} */}
                  
                  </Card.Text>

                    <Year/>
                    <Make/>
                    <Model/>
        </Card.Body>
      </Card>
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



