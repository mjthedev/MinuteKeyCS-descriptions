import React from 'react';
import ReactDom from 'react-dom';
import {DropdownButton} from "react-bootstrap"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {RunMake} from '../functions/runMake'




 const Make = () => {

    
    let [make, setMake] = React.useState('')
    
    return (
        <DropdownButton variant='success' id="dropdownmake" title="Make">
        <DropdownItem id="acura" onClick={()=> RunMake('acura')}>ACURA</DropdownItem>
        <DropdownItem id="buick" onClick={()=> RunMake('buick')}>BUICK</DropdownItem>
        <DropdownItem id="cadillac" onClick={()=> RunMake('cadillac')}>CADILLAC</DropdownItem>
        <DropdownItem id="chevorlet" onClick={()=> RunMake('chevorlet')}>CHEVORLET</DropdownItem>
        <DropdownItem id="chrysler" onClick={()=> RunMake('chrysler')}>CHRYSLER</DropdownItem>
        <DropdownItem id="dodge" onClick={()=> RunMake('dodge')}>DODGE</DropdownItem>
        <DropdownItem id="ford" onClick={()=> RunMake('ford')}>FORD</DropdownItem>
        <DropdownItem id="gmc" onClick={()=> RunMake('gmc')}>GMC</DropdownItem>
        <DropdownItem id="honda" onClick={()=> RunMake('honda')}>HONDA</DropdownItem>
        <DropdownItem id="hyundai" onClick={()=> RunMake('hyundai')}>HYUNDAI</DropdownItem>
        <DropdownItem id="infiniti" onClick={()=> RunMake('infiniti')}>INFINITI</DropdownItem>
        <DropdownItem id="jeep" onClick={()=> RunMake('jeep')}>JEEP</DropdownItem>
        <DropdownItem id="kia" onClick={()=> RunMake('kia')}>KIA</DropdownItem>
        <DropdownItem id="lexus" onClick={()=> RunMake('lexus')}>LEXUS</DropdownItem>
        <DropdownItem id="mazda" onClick={()=> RunMake('mazda')}>MAZDA</DropdownItem>
        <DropdownItem id="nissan" onClick={()=> RunMake('nissan')}>NISSAN</DropdownItem>
        <DropdownItem id="pontiac" onClick={()=> RunMake('pontiac')}>PONTIAC</DropdownItem>
        <DropdownItem id="subaru" onClick={()=> RunMake('subaru')}>SUBARU</DropdownItem>
        <DropdownItem id="toyota" onClick={()=> RunMake('toyota')}>TOYOTA</DropdownItem>
        <DropdownItem id="volkswagen" onClick={()=> RunMake('volkswagen')}>VOLKSWAGEN</DropdownItem>
        <DropdownItem id="volvo" onClick={()=> RunMake('volvo')}>VOLVO</DropdownItem>
        <DropdownItem id="blank" onClick={()=> RunMake('blank')}>BLANK</DropdownItem>
        <DropdownItem id="blank" onClick={()=> RunMake('blank')}>BLANK</DropdownItem>
    </DropdownButton>
    )
}

export default Make;