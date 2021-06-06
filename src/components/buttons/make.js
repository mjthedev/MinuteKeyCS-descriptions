import React from 'react';

import {DropdownButton} from "react-bootstrap"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {RunMake} from '../functions/runMake'

import { 
    //  useSelector,
     useDispatch } from 'react-redux'
import { changeText } from '../../app/features/make/make'








 const Make = () => {
    // const theMake = useSelector(state => state.make.value)
    const dispatch = useDispatch()
    


    let RunMeMake = (x) => {
        RunMake(x)
        dispatch(changeText())
    
    }
    
    // let [make, setMake] = React.useState('')
    
    return (
        <DropdownButton variant='success' id="dropdownmake" title="Make">
        <DropdownItem id="acura" onClick={()=> RunMeMake('acura')}>ACURA</DropdownItem>
        <DropdownItem id="buick" onClick={()=> RunMeMake('buick')}>BUICK</DropdownItem>
        <DropdownItem id="cadillac" onClick={()=> RunMeMake('cadillac')}>CADILLAC</DropdownItem>
        <DropdownItem id="chevorlet" onClick={()=> RunMeMake('chevorlet')}>CHEVORLET</DropdownItem>
        <DropdownItem id="chrysler" onClick={()=> RunMeMake('chrysler')}>CHRYSLER</DropdownItem>
        <DropdownItem id="dodge" onClick={()=> RunMeMake('dodge')}>DODGE</DropdownItem>
        <DropdownItem id="ford" onClick={()=> RunMeMake('ford')}>FORD</DropdownItem>
        <DropdownItem id="gmc" onClick={()=> RunMeMake('gmc')}>GMC</DropdownItem>
        <DropdownItem id="honda" onClick={()=> RunMeMake('honda')}>HONDA</DropdownItem>
        <DropdownItem id="hyundai" onClick={()=> RunMeMake('hyundai')}>HYUNDAI</DropdownItem>
        <DropdownItem id="infiniti" onClick={()=> RunMeMake('infiniti')}>INFINITI</DropdownItem>
        <DropdownItem id="jeep" onClick={()=> RunMeMake('jeep')}>JEEP</DropdownItem>
        <DropdownItem id="kia" onClick={()=> RunMeMake('kia')}>KIA</DropdownItem>
        <DropdownItem id="lexus" onClick={()=> RunMeMake('lexus')}>LEXUS</DropdownItem>
        <DropdownItem id="mazda" onClick={()=> RunMeMake('mazda')}>MAZDA</DropdownItem>
        <DropdownItem id="nissan" onClick={()=> RunMeMake('nissan')}>NISSAN</DropdownItem>
        <DropdownItem id="pontiac" onClick={()=> RunMeMake('pontiac')}>PONTIAC</DropdownItem>
        <DropdownItem id="subaru" onClick={()=> RunMeMake('subaru')}>SUBARU</DropdownItem>
        <DropdownItem id="toyota" onClick={()=> RunMeMake('toyota')}>TOYOTA</DropdownItem>
        <DropdownItem id="volkswagen" onClick={()=> RunMake('volkswagen')}>VOLKSWAGEN</DropdownItem>
        <DropdownItem id="volvo" onClick={()=> RunMake('volvo')}>VOLVO</DropdownItem>
    </DropdownButton>
    )
}

export default Make;