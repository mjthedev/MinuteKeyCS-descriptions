import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {FaRegCopy} from 'react-icons/fa';
import { HiOutlineRefresh } from "react-icons/hi";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Card} from "react-bootstrap";
import Year from '../../buttons/year';
import Make from '../../buttons/make';
import Model from '../../buttons/model';
import copyText from '../../functions/copytext';
import {resetYear} from '../../../app/features/year/year';
import {resetMake} from  '../../../app/features/make/make';
import {resetModel} from '../../../app/features/model/model';







function AutoLockoutKey() {

  const theYear = useSelector(state => state.year.value)
  const theMake = useSelector(state => state.make.value)
  const theModel = useSelector(state => state.model.value)

  const dispatch = useDispatch();

  let ResetAll = () => {
    dispatch(resetYear())
    dispatch(resetMake())
    dispatch(resetModel())
  }
  
    

    return (
      <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
        <Card.Header as="h1"> Auto <FaRegCopy size={30} onClick={() =>  copyText()}/><HiOutlineRefresh style={{size: 30, float:'right'}} onClick={()=> ResetAll()} /></Card.Header>
        <Card.Body>
          <Card.Title as="h3" >Description</Card.Title>
          <Card.Text id='description'>
          <br/>

          <strong>QUOTE FOR AUTO KEY & LOCKOUT</strong><br/>
          <br/>
           Customer is locked out of vehicle and would like to have a key made for the same vehicle.<br/>
           <span className="h5">VEHICLE: {theYear} {theMake} {theModel}</span>

          </Card.Text>
          <Year/>
          <Make/>
          <Model/>
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoLockoutKey;
    // AutoLockout
