import React from 'react';
import ReactDom from 'react-dom';
import {FaRegCopy} from 'react-icons/fa'
import "bootstrap/dist/js/bootstrap.bundle.js"
import {Card, Button, DropdownButton, Dropdown} from "react-bootstrap"

import './descriptions.css'
import DropdownItem from 'react-bootstrap/esm/DropdownItem';





function AutoKey() {



  let [year, setYear] = React.useState('')
  let [make, setMake] = React.useState('')
  let [model, setModel] = React.useState('')
  let [modeldropdown, setModeldropdown] = React.useState('testmodel')



 
let runYear = (x) => {
          
  let title = document.getElementById('dropdowntitle')
  let carYear = document.getElementById(`${x}`)
  title.innerHTML = carYear.innerHTML
  let yearText = title.innerHTML
  console.log(yearText)

  setYear(yearText)
  console.log(year)
  console.log(navigator)
  


}



  let runMake =  (x) => {

    

  

          let maketitle = document.getElementById('dropdownmake')
          let carMake = document.getElementById(`${x}`)
          maketitle.innerText = carMake.innerText;
          let makeText = maketitle.innerText;
      
          setMake(makeText)
 


  }

  

  let runModel = (x) => {


    let modeltitle = document.getElementById('dropdownmodel')
    let carModel = document.getElementById(`${x}`)
    modeltitle.innerText = carModel.innerText
    let modelText = modeltitle.innerText

    
    console.log(modelText)

    setModel(modelText)

  }





  
  // var controlledYear = document.getElementById('testyear')
  // let controlledDropdowntitle = document.getElementById('dropdowntitle')
  // let {year: theYear} = year
  // let me = "you"

    return (  
        <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 180}}>
          <Card.Header  as="h1"> Auto</Card.Header>
            <Card.Body>
              <Card.Title as="h3" >Auto Key Description</Card.Title>
                  <Card.Text id='autokey-description'>
                  QUOTE FOR AUTO KEY- <br/>
                  Customer would like to have a key made for a vehicle<br/>
                  VEHICLE: {year} {make} {model}
                  </Card.Text>

    

            <DropdownButton variant='success' id="dropdowntitle" title="Year"
  >
                <Dropdown.Item id="year2021" onClick={() => {runYear('year2021')}} >2021</Dropdown.Item>
                <Dropdown.Item id="year2020" onClick={() => {runYear('year2020')}}>2020</Dropdown.Item>
                <Dropdown.Item id="year2019" onClick={() => {runYear('year2019')}}>2019</Dropdown.Item>
                <Dropdown.Item id="year2018" onClick={() => {runYear('year2018')}}>2018</Dropdown.Item>
                <Dropdown.Item id="year2017" onClick={() => {runYear('year2017')}}>2017</Dropdown.Item>
                <Dropdown.Item id="year2016" onClick={() => {runYear('year2016')}}>2016</Dropdown.Item>
                <Dropdown.Item id="year2015" onClick={() => {runYear('year2015')}}>2015</Dropdown.Item>
                <Dropdown.Item id="year2014" onClick={() => {runYear('year2014')}}>2014</Dropdown.Item>
                <Dropdown.Item id="year2013" onClick={() => {runYear('year2013')}}>2013</Dropdown.Item>
                <Dropdown.Item id="year2012" onClick={() => {runYear('year2012')}}>2013</Dropdown.Item>
                <Dropdown.Item id="year2011" onClick={() => {runYear('year2011')}}>2012</Dropdown.Item>
                <Dropdown.Item id="year2010" onClick={() => {runYear('year2010')}}>2011</Dropdown.Item>
                <Dropdown.Item id="year2009" onClick={() => {runYear('year2009')}}>2010</Dropdown.Item>
                <Dropdown.Item id="year2008" onClick={() => {runYear('year2008')}}>2009</Dropdown.Item>
                <Dropdown.Item id="year2007" onClick={() => {runYear('year2007')}}>2008</Dropdown.Item>
                <Dropdown.Item id="year2006" onClick={() => {runYear('year2006')}}>2006</Dropdown.Item>
                <Dropdown.Item id="year2005" onClick={() => {runYear('year2005')}}>2005</Dropdown.Item>
                <Dropdown.Item id="year2004" onClick={() => {runYear('year2004')}}>2004</Dropdown.Item>
                <Dropdown.Item id="year2003" onClick={() => {runYear('year2003')}}>2003</Dropdown.Item>
                <Dropdown.Item id="year2004" onClick={() => {runYear('year2002')}}>2002</Dropdown.Item>
                <Dropdown.Item id="year2001" onClick={() => {runYear('year2001')}}>2002</Dropdown.Item>
                <Dropdown.Item id="year2000" onClick={() => {runYear('year2000')}}>2001</Dropdown.Item>
                <Dropdown.Item id="year1999" onClick={() => {runYear('year1999')}}>2000</Dropdown.Item>
                <Dropdown.Item id="year1998" onClick={() => {runYear('year1998')}}>1999</Dropdown.Item>
                <Dropdown.Item id="year1997" onClick={() => {runYear('year1997')}}>1998</Dropdown.Item>
                <Dropdown.Item id="year1996" onClick={() => {runYear('year1996')}}>1997</Dropdown.Item>
                <Dropdown.Item id="year1995" onClick={() => {runYear('year1995')}}>1996</Dropdown.Item>
                <Dropdown.Item id="year1994" onClick={() => {runYear('year1994')}}>1995</Dropdown.Item>
                <Dropdown.Item id="year1993" onClick={() => {runYear('year1993')}}>1994</Dropdown.Item>
                <Dropdown.Item id="year1992" onClick={() => {runYear('year1992')}}>1993</Dropdown.Item>
                <Dropdown.Item id="year1991" onClick={() => {runYear('year1991')}}>1992</Dropdown.Item>
                <Dropdown.Item id="year1990" onClick={() => {runYear('year1990')}}>1990</Dropdown.Item>
                <Dropdown.Item id="year1989" onClick={() => {runYear('year1989')}}>1989</Dropdown.Item>
                <Dropdown.Item id="year1988" onClick={() => {runYear('year1988')}}>1988</Dropdown.Item>
                <Dropdown.Item id="year1987" onClick={() => {runYear('year1987')}}>1987</Dropdown.Item>
                <Dropdown.Item id="year1986" onClick={() => {runYear('year1986')}}>1986</Dropdown.Item>
                <Dropdown.Item id="year1985" onClick={() => {runYear('year1985')}}>1985</Dropdown.Item>
                <Dropdown.Item id="year1984" onClick={() => {runYear('year1984')}}>1984</Dropdown.Item>
                <Dropdown.Item id="year1983" onClick={() => {runYear('year1983')}}>1983</Dropdown.Item>
                <Dropdown.Item id="year1982" onClick={() => {runYear('year1982')}}>1982</Dropdown.Item>
                <Dropdown.Item id="year1981" onClick={() => {runYear('year1981')}}>1981</Dropdown.Item>
                <Dropdown.Item id="year1980" onClick={() => {runYear('year1980')}}>1980</Dropdown.Item>
                <Dropdown.Item id="year1979" onClick={() => {runYear('year1979')}}>1979</Dropdown.Item>
                <Dropdown.Item id="year1978" onClick={() => {runYear('year1978')}}>1978</Dropdown.Item>
                <Dropdown.Item id="year1977" onClick={() => {runYear('year1977')}}>1977</Dropdown.Item>
                <Dropdown.Item id="year1976" onClick={() => {runYear('year1976')}}>1976</Dropdown.Item>
                <Dropdown.Item id="year1975" onClick={() => {runYear('year1975')}}>1975</Dropdown.Item>
            
          </DropdownButton>
 
          <DropdownButton variant='success' id="dropdownmake" title="Make">
                <DropdownItem id="acura" onClick={()=> runMake('acura')}>ACURA</DropdownItem>
                <DropdownItem id="buick" onClick={()=> runMake('buick')}>BUICK</DropdownItem>
                <DropdownItem id="cadillac" onClick={()=> runMake('cadillac')}>CADILLAC</DropdownItem>
                <DropdownItem id="chevorlet" onClick={()=> runMake('chevorlet')}>CHEVORLET</DropdownItem>
                <DropdownItem id="honda" onClick={()=> runMake('honda')}>HONDA</DropdownItem>
                <DropdownItem id="jeep" onClick={()=> runMake('jeep')}>JEEP</DropdownItem>
                <DropdownItem id="nissan" onClick={()=> runMake('nissan')}>NISSAN</DropdownItem>
                <DropdownItem id="mazda" onClick={()=> runMake('mazda')}>MAZDA</DropdownItem>
                <DropdownItem id="lexus" onClick={()=> runMake('lexus')}>LEXUS</DropdownItem>
                <DropdownItem id="gmc" onClick={()=> runMake('gmc')}>GMC</DropdownItem>
                <DropdownItem id="subaru" onClick={()=> runMake('subaru')}>SUBARU</DropdownItem>
                <DropdownItem id="ford" onClick={()=> runMake('ford')}>FORD</DropdownItem>
                <DropdownItem id="kia" onClick={()=> runMake('kia')}>KIA</DropdownItem>
                <DropdownItem id="hyundai" onClick={()=> runMake('hyundai')}>HYUNDAI</DropdownItem>
                <DropdownItem id="pontiac" onClick={()=> runMake('pontiac')}>PONTIAC</DropdownItem>
                <DropdownItem id="chrysler" onClick={()=> runMake('chrysler')}>CHRYSLER</DropdownItem>
                <DropdownItem id="volvo" onClick={()=> runMake('volvo')}>VOLVO</DropdownItem>
                <DropdownItem id="volkswagen" onClick={()=> runMake('volkswagen')}>VOLKSWAGEN</DropdownItem>
                <DropdownItem id="toyota" onClick={()=> runMake('toyota')}>TOYOTA</DropdownItem>
                <DropdownItem id="blank" onClick={()=> runMake('blank')}>BLANK</DropdownItem>
                <DropdownItem id="blank" onClick={()=> runMake('blank')}>BLANK</DropdownItem>
            </DropdownButton>


       <DropdownButton variant='success' id="dropdownmodel" title="Model">
             <DropdownItem id="camry" onClick = {()=> runModel('camry')}>CAMRY</DropdownItem>
             <DropdownItem id="corolla" onClick = {()=> runModel('corolla')}>COROLLA</DropdownItem>
             <DropdownItem id="rav4" onClick = {()=> runModel('rav4')}>RAV4</DropdownItem>
             <DropdownItem id="tacoma" onClick = {()=> runModel('tacoma')}>TACOMA</DropdownItem>
             <DropdownItem id="tundra" onClick = {()=> runModel('tundra')}>TUNDRA</DropdownItem>
          </DropdownButton>








            {/* <DropdownButton variant='success' id={modeldropdown} title="TEST">
                <DropdownItem id="modeltype" onClick = {()=> runModel()}>test</DropdownItem>
                <DropdownItem id="modeltype" onClick = {()=> runModel()}>test</DropdownItem>
                <DropdownItem id="modeltype" onClick = {()=> runModel()}>test</DropdownItem>
                <DropdownItem id="modeltype" onClick = {()=> runModel()}>test</DropdownItem>
                <DropdownItem id="modeltype" onClick = {()=> runModel()}>test</DropdownItem>
            </DropdownButton>
              */}




   
           
    
          <FaRegCopy  size={30} onClick={() => navigator.clipboard.writeText(document.getElementById('autokey-description').textContent)}/>
          
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoKey;
    // AutoLockout
