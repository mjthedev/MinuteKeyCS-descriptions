import React from 'react';
import {FaRegCopy} from 'react-icons/fa';
import { HiOutlineRefresh } from "react-icons/hi";
import "bootstrap/dist/js/bootstrap.bundle.js";
import {Card, 
  // Button
} from "react-bootstrap";
import Year from '../../buttons/year';
import Make from '../../buttons/make';
import Model from '../../buttons/model';
import copyText from '../../functions/copytext';
import { useSelector, useDispatch} from 'react-redux';
import {resetYear} from '../../../app/features/year/year'
import {resetMake} from '../../../app/features/make/make'
import {resetModel} from '../../../app/features/model/model'






function AutoIgnition() {
  const dispatch = useDispatch()

  const theYear = useSelector((state) => state.year.value)
    const theMake = useSelector((state) => state.make.value)
    const theModel = useSelector((state) => state.model.value)
  
    let ResetYear = () => {
        dispatch(resetYear());
        dispatch(resetMake());
        dispatch(resetModel());
  }
  
    

    return (
      <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
        <Card.Header as="h1"> Auto <FaRegCopy size={30} onClick={() =>  copyText()}/><HiOutlineRefresh onClick={() => {ResetYear()}} style={{float:'right'}}/></Card.Header>
        <Card.Body>
          <Card.Title as="h3" >Description</Card.Title>
          <Card.Text id='description'>
           <br/>
           <strong>AUTO IGNITION</strong> <br/>
           <br/>
           Customer has key locked/broken in the ignition and/or would simply like to have ignition replaced and in need of immediate assistance.<br/>
           <span className="h5">VEHICLE: {theYear} {theMake} {theModel}</span>
          </Card.Text>

          <Year/>
          <Make/>
          <Model/>
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoIgnition;
    // AutoLockout
