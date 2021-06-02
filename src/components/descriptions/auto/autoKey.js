import React from 'react';
import {FaRegCopy} from 'react-icons/fa'
import "bootstrap/dist/js/bootstrap.bundle.js"
import {Card} from "react-bootstrap"
import './descriptions.css'
import Year from '../../buttons/year'
import Make from '../../buttons/make'
import Model from '../../buttons/model'



function AutoKey() {



  let [year, setYear] = React.useState('')
  let [make, setMake] = React.useState('')
  let [model, setModel] = React.useState('')
  // let [modeldropdown, setModeldropdown] = React.useState('testmodel')





  
  // var controlledYear = document.getElementById('testyear')
  // let controlledDropdowntitle = document.getElementById('dropdowntitle')
  // let {year: theYear} = year
  // let me = "you"

    return (  
        <Card className="mx-auto " bg={'secondary'} text='white' style={{width: '28rem', marginTop: 20}}>
          <Card.Header  as="h1"> Auto</Card.Header>
            <Card.Body>
              <Card.Title as="h3" >Description</Card.Title>
                  <Card.Text id='description'>
                  <br/>
                  <stong>QUOTE FOR AUTO KEY</stong>  <br/>
                  Customer would like to have a key made for a vehicle.<br/>
                  VEHICLE: {year} {make} {model}
                  </Card.Text>

                    <Year/>
                    <Make/>
                    <Model/>
                  
          <FaRegCopy  size={30} onClick={() => navigator.clipboard.writeText(document.getElementById('description').textContent)}/>
          
        </Card.Body>
      </Card>
    )
    
    
};



export default AutoKey;
    // AutoLockout
