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
                <DropdownItem id="chrysler" onClick={()=> runMake('chrysler')}>CHRYSLER</DropdownItem>
                <DropdownItem id="dodge" onClick={()=> runMake('dodge')}>DODGE</DropdownItem>
                <DropdownItem id="ford" onClick={()=> runMake('ford')}>FORD</DropdownItem>
                <DropdownItem id="gmc" onClick={()=> runMake('gmc')}>GMC</DropdownItem>
                <DropdownItem id="honda" onClick={()=> runMake('honda')}>HONDA</DropdownItem>
                <DropdownItem id="hyundai" onClick={()=> runMake('hyundai')}>HYUNDAI</DropdownItem>
                <DropdownItem id="infiniti" onClick={()=> runMake('infiniti')}>INFINITI</DropdownItem>
                <DropdownItem id="jeep" onClick={()=> runMake('jeep')}>JEEP</DropdownItem>
                <DropdownItem id="kia" onClick={()=> runMake('kia')}>KIA</DropdownItem>
                <DropdownItem id="lexus" onClick={()=> runMake('lexus')}>LEXUS</DropdownItem>
                <DropdownItem id="mazda" onClick={()=> runMake('mazda')}>MAZDA</DropdownItem>
                <DropdownItem id="nissan" onClick={()=> runMake('nissan')}>NISSAN</DropdownItem>
                <DropdownItem id="pontiac" onClick={()=> runMake('pontiac')}>PONTIAC</DropdownItem>
                <DropdownItem id="subaru" onClick={()=> runMake('subaru')}>SUBARU</DropdownItem>
                <DropdownItem id="toyota" onClick={()=> runMake('toyota')}>TOYOTA</DropdownItem>
                <DropdownItem id="volkswagen" onClick={()=> runMake('volkswagen')}>VOLKSWAGEN</DropdownItem>
                <DropdownItem id="volvo" onClick={()=> runMake('volvo')}>VOLVO</DropdownItem>
                <DropdownItem id="blank" onClick={()=> runMake('blank')}>BLANK</DropdownItem>
                <DropdownItem id="blank" onClick={()=> runMake('blank')}>BLANK</DropdownItem>
            </DropdownButton>

       <DropdownButton variant='success' id="dropdownmodel" title="Model">

          <Dropdown.Divider/>
          <Dropdown.Item>ACURA</Dropdown.Item>
          <Dropdown.Divider/>
            <Dropdown.Item id="slx" onClick = {()=> runModel('slx')}>SLX</Dropdown.Item>
            <Dropdown.Item id="zdx" onClick = {()=> runModel('zdx')}>ZDX</Dropdown.Item>
            <Dropdown.Item id="rl" onClick = {()=> runModel('rl')}>RL</Dropdown.Item>
            <Dropdown.Item id="csx" onClick = {()=> runModel('csx')}>CSX</Dropdown.Item>
            <Dropdown.Item id="tl" onClick = {()=> runModel('tl')}>TL</Dropdown.Item>
            <Dropdown.Item id="tsx" onClick = {()=> runModel('tsx')}>TSX</Dropdown.Item>
            <Dropdown.Item id="el" onClick = {()=> runModel('el')}>EL</Dropdown.Item>
            <Dropdown.Item id="vigor" onClick = {()=> runModel('vigor')}>VIGOR</Dropdown.Item>
            <Dropdown.Item id="integra" onClick = {()=> runModel('integra')}>INTEGRA</Dropdown.Item>
            <Dropdown.Item id="legend" onClick = {()=> runModel('legend')}>LEGEND</Dropdown.Item>
            <Dropdown.Item id="rlx" onClick = {()=> runModel('rlx')}>RLX</Dropdown.Item>
            <Dropdown.Item id="rsx" onClick = {()=> runModel('rsx')}>RSX</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="tsx" onClick = {()=> runModel('tsx')}>TSX</Dropdown.Item>

        <Dropdown.Divider/>
        <Dropdown.Item>BUICK</Dropdown.Item>
        <Dropdown.Divider/>
            <Dropdown.Item id="excelle" onClick = {()=> runModel('excelle')}>EXCELLE</Dropdown.Item>
            <Dropdown.Item id="excellegt" onClick = {()=> runModel('excellegt')}>EXCELLE GT</Dropdown.Item>
            <Dropdown.Item id="lacrosse" onClick = {()=> runModel('lacrosse')}>LACROSSE</Dropdown.Item>
            <Dropdown.Item id="regal" onClick = {()=> runModel('regal')}>REGAL</Dropdown.Item>
            <Dropdown.Item id="velite6" onClick = {()=> runModel('velite6')}>VELITE 6</Dropdown.Item>
            <Dropdown.Item id="velite7" onClick = {()=> runModel('velite7')}>VELITE 7</Dropdown.Item>
            <Dropdown.Item id="verano" onClick = {()=> runModel('verano')}>VERANO</Dropdown.Item>
            <Dropdown.Item id="enclave" onClick = {()=> runModel('enclave')}>ENCLAVE</Dropdown.Item>
            <Dropdown.Item id="encore" onClick = {()=> runModel('encore')}>ENCORE</Dropdown.Item>
            <Dropdown.Item id="encoregx" onClick = {()=> runModel('encoregx')}>ENCORE GX</Dropdown.Item>
            <Dropdown.Item id="envision" onClick = {()=> runModel('envision')}>ENVISION</Dropdown.Item>
            <Dropdown.Item id="gl6" onClick = {()=> runModel('gl6')}>GL6</Dropdown.Item>
            <Dropdown.Item id="gl8" onClick = {()=> runModel('gl8')}>GL8</Dropdown.Item>

          <Dropdown.Divider/>
          <Dropdown.Item>CADILLAC</Dropdown.Item>
          <Dropdown.Divider/>
            <Dropdown.Item id="ct4" onClick = {()=> runModel('ct4')}>CT4</Dropdown.Item>
            <Dropdown.Item id="ct5" onClick = {()=> runModel('ct5')}>CT5</Dropdown.Item>
            <Dropdown.Item id="ct6" onClick = {()=> runModel('ct6')}>CT6</Dropdown.Item>
            <Dropdown.Item id="escalade" onClick = {()=> runModel('escalade')}>ESCALADE</Dropdown.Item>
            <Dropdown.Item id="escaladeesv" onClick = {()=> runModel('escaladeesv')}>ESCALADE ESV</Dropdown.Item>
            <Dropdown.Item id="xt4" onClick = {()=> runModel('xt4')}>XT4</Dropdown.Item>
            <Dropdown.Item id="xt5" onClick = {()=> runModel('xt5')}>XT5</Dropdown.Item>
            <Dropdown.Item id="xt6" onClick = {()=> runModel('xt6')}>XT6</Dropdown.Item>
            
            <Dropdown.Divider />
            <Dropdown.Item align='end'>CHEVORLET</Dropdown.Item>
            <Dropdown.Divider />
             <DropdownItem id="bolt" onClick = {()=> runModel('bolt')}>BOLT</DropdownItem>
             <DropdownItem id="cruze" onClick = {()=> runModel('cruze')}>CRUZE</DropdownItem>
             <DropdownItem id="colorado" onClick = {()=> runModel('colorado')}>COLORADO</DropdownItem>
             <DropdownItem id="onyx" onClick = {()=> runModel('onyx')}>ONYX</DropdownItem>
             <DropdownItem id="spark" onClick = {()=> runModel('spark')}>SPARK</DropdownItem>
             <DropdownItem id="malibu" onClick = {()=> runModel('malibu')}>MALIBU</DropdownItem>
             <DropdownItem id="cavalier" onClick = {()=> runModel('cavalier')}>CAVALIER</DropdownItem>
             <DropdownItem id="corvette" onClick = {()=> runModel('corvette')}>CORVETTE</DropdownItem>
             <DropdownItem id="camaro" onClick = {()=> runModel('camaro')}>CAMARO</DropdownItem>
             <DropdownItem id="silverado" onClick = {()=> runModel('silverado')}>SILVERADO</DropdownItem>
             <DropdownItem id="blazer" onClick = {()=> runModel('blazer')}>BLAZER</DropdownItem>
             <DropdownItem id="equinox" onClick = {()=> runModel('equinox')}>EQUINOX</DropdownItem>
             <DropdownItem id="surburban" onClick = {()=> runModel('surburban')}>SURBURBAN</DropdownItem>
             <DropdownItem id="tahoe" onClick = {()=> runModel('tahoe')}>TAHOE</DropdownItem>
             <DropdownItem id="trailblazer" onClick = {()=> runModel('trailblazer')}>TRAILBLAZER</DropdownItem>
             <DropdownItem id="traverse" onClick = {()=> runModel('traverse')}>TRAVERSE</DropdownItem>
             <DropdownItem id="trax" onClick = {()=> runModel('trax')}>TRAX</DropdownItem>
             <DropdownItem id="express" onClick = {()=> runModel('express')}>EXPRESS</DropdownItem>

             <Dropdown.Divider/>
            <Dropdown.Item>CHRYSLER</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item id="200" onClick = {()=> runModel('200')}>200</Dropdown.Item>
            <Dropdown.Item id="300" onClick = {()=> runModel('300')}>300</Dropdown.Item>
            <Dropdown.Item id="pacifica" onClick = {()=> runModel('pacifica')}>PACIFICA</Dropdown.Item>
            <Dropdown.Item id="voyager" onClick = {()=> runModel('voyager')}>VOYAGER</Dropdown.Item>

            <Dropdown.Divider />
            <Dropdown.Item>DODGE</Dropdown.Item>
            <Dropdown.Divider />
             <DropdownItem id="ram-1500" onClick = {()=> runModel('ram-1500')}>RAM-1500</DropdownItem>
             <DropdownItem id="ram-2500" onClick = {()=> runModel('ram-2500')}>RAM-2500</DropdownItem>
             <DropdownItem id="ram-3500" onClick = {()=> runModel('ram-3500')}>RAM-3500</DropdownItem>
             <DropdownItem id="challenger" onClick = {()=> runModel('challenger')}>CHALLENGER</DropdownItem>
             <DropdownItem id="journey" onClick = {()=> runModel('journey')}>JOURNEY</DropdownItem>
             <DropdownItem id="caliber" onClick = {()=> runModel('caliber')}>CALIBER</DropdownItem>
             <DropdownItem id="caravan" onClick = {()=> runModel('caravan')}>CARAVAN</DropdownItem>
             <DropdownItem id="durango" onClick = {()=> runModel('durango')}>DURANGO</DropdownItem>
             <DropdownItem id="attitude" onClick = {()=> runModel('attitude')}>ATTITUDE</DropdownItem>
             <DropdownItem id="charger" onClick = {()=> runModel('charger')}>CHARGER</DropdownItem>
             <DropdownItem id="neon" onClick = {()=> runModel('neon')}>NEON</DropdownItem>

            <Dropdown.Divider/>
            <Dropdown.Item>FORD</Dropdown.Item>
            <Dropdown.Divider />
             <DropdownItem id="bronco" onClick = {()=> runModel('bronco')}>BRONCO</DropdownItem>
             <DropdownItem id="broncosport" onClick = {()=> runModel('broncosport')}>BRONCO SPORT</DropdownItem>
             <DropdownItem id="fiesta" onClick = {()=> runModel('fiesta')}>FIESTA</DropdownItem>
             <DropdownItem id="f-150" onClick = {()=> runModel('f-150')}>F-150</DropdownItem>
             <DropdownItem id="f-250" onClick = {()=> runModel('f-250')}>F-250</DropdownItem>
             <DropdownItem id="f-350" onClick = {()=> runModel('f-350')}>F-350</DropdownItem>
             <DropdownItem id="e-150" onClick = {()=> runModel('e-150')}>E-150</DropdownItem>
             <DropdownItem id="e-250" onClick = {()=> runModel('e-250')}>E-250</DropdownItem>
             <DropdownItem id="e-350" onClick = {()=> runModel('e-350')}>E-350</DropdownItem>
             <DropdownItem id="focus" onClick = {()=> runModel('focus')}>FOCUS</DropdownItem>
             <DropdownItem id="ka" onClick = {()=> runModel('ka')}>KA</DropdownItem>
             <DropdownItem id="figo" onClick = {()=> runModel('figo')}>FIGO</DropdownItem>
             <DropdownItem id="escort" onClick = {()=> runModel('escort')}>ESCORT</DropdownItem>
             <DropdownItem id="aspire" onClick = {()=> runModel('aspire')}>ASPIRE</DropdownItem>
             <DropdownItem id="fusion" onClick = {()=> runModel('fusion')}>FUSION</DropdownItem>
             <DropdownItem id="taurus" onClick = {()=> runModel('taurus')}>TAURUS</DropdownItem>
             <DropdownItem id="mondeo" onClick = {()=> runModel('mondeo')}>MONDEO</DropdownItem>
             <DropdownItem id="mustang" onClick = {()=> runModel('mustang')}>MUSTANG</DropdownItem>
             <DropdownItem id="ecosport" onClick = {()=> runModel('ecosport')}>ECOSPORT</DropdownItem>
             <DropdownItem id="edge" onClick = {()=> runModel('edge')}>EDGE</DropdownItem>
             <DropdownItem id="equator" onClick = {()=> runModel('equator')}>EQUATOR</DropdownItem>
             <DropdownItem id="escape" onClick = {()=> runModel('escape')}>ESCAPE</DropdownItem>
             <DropdownItem id="everest/endeavour" onClick = {()=> runModel('everest/endeavour')}>EVEREST/ENDEAVOUR</DropdownItem>
             <DropdownItem id="evos" onClick = {()=> runModel('evos')}>EVOS</DropdownItem>
             <DropdownItem id="expedition" onClick = {()=> runModel('expedition')}>EXPEDIITON</DropdownItem>
             <DropdownItem id="explorer" onClick = {()=> runModel('explorer')}>EXPLORER</DropdownItem>
             <DropdownItem id="mustangmache" onClick = {()=> runModel('mustangmache')}>MUSTANG MACH-E</DropdownItem>
             <DropdownItem id="puma" onClick = {()=> runModel('puma')}>PUMA</DropdownItem>
             <DropdownItem id="territory" onClick = {()=> runModel('territory')}>TERRITORY</DropdownItem>
             <DropdownItem id="ranger" onClick = {()=> runModel('ranger')}>RANGER</DropdownItem>
             <DropdownItem id="transit" onClick = {()=> runModel('transit')}>TRANSIT</DropdownItem>
             <DropdownItem id="galaxy" onClick = {()=> runModel('galaxy')}>GALAXY</DropdownItem>
             <DropdownItem id="superduty" onClick = {()=> runModel('superduty')}>SUPERDUTY</DropdownItem>

             <Dropdown.Divider/>
            <Dropdown.Item>GMC</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item id="acadia" onClick = {()=> runModel('acadia')}>ACADIA</Dropdown.Item>
            <Dropdown.Item id="terrain" onterrainick = {()=> runModel('terrain')}>TERRAIN</Dropdown.Item>
            <Dropdown.Item id="yukon" onClick = {()=> runModel('yukon')}>YUKON</Dropdown.Item>
            <Dropdown.Item id="yukonxl" onClick = {()=> runModel('yukonxl')}>YUKON XL</Dropdown.Item>
            <Dropdown.Item id="canyon" onClick = {()=> runModel('canyon')}>CANYON</Dropdown.Item>
            <Dropdown.Item id="sierra" onClick = {()=> runModel('sierra')}>SIERRA</Dropdown.Item>
            <Dropdown.Item id="savana" onClick = {()=> runModel('savana')}>SAVANA</Dropdown.Item>
            <Dropdown.Item id="hummer" onClick = {()=> runModel('hummer')}>HUMMER</Dropdown.Item>

            <Dropdown.Divider/>
            <Dropdown.Item>HONDA</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item id="civic" onClick = {()=> runModel('civic')}>CIVIC</Dropdown.Item>
            <Dropdown.Item id="civictyper" onClick = {()=> runModel('civictyper')}>CIVIC TYPE R</Dropdown.Item>
            <Dropdown.Item id="fit" onClick = {()=> runModel('fit')}>FIT</Dropdown.Item>
            <Dropdown.Item id="accord" onClick = {()=> runModel('accord')}>ACCORD</Dropdown.Item>
            <Dropdown.Item id="clarity" onClick = {()=> runModel('clarity')}>CLARITY</Dropdown.Item>
            <Dropdown.Item id="insight" onClick = {()=> runModel('insight')}>INSIGHT</Dropdown.Item>
            <Dropdown.Item id="passport" onClick = {()=> runModel('passport')}>PASSPORT</Dropdown.Item>
            <Dropdown.Item id="pilot" onClick = {()=> runModel('pilot')}>PILOT</Dropdown.Item>
            <Dropdown.Item id="crv" onClick = {()=> runModel('crv')}>CR-V</Dropdown.Item>
            <Dropdown.Item id="ridgeline" onClick = {()=> runModel('ridgeline')}>RIDGELINE</Dropdown.Item>
            <Dropdown.Item id="frontier" onClick = {()=> runModel('frontier')}>FRONTIER</Dropdown.Item>
            
            <Dropdown.Divider/>
            <Dropdown.Item>HYUNDAI</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item id="accent" onClick = {()=> runModel('accent')}>ACCENT</Dropdown.Item>
            <Dropdown.Item id="elantra" onClick = {()=> runModel('elantra')}>ELANTRA</Dropdown.Item>
            <Dropdown.Item id="sonata" onClick = {()=> runModel('sonata')}>SONATA</Dropdown.Item>
            <Dropdown.Item id="palisade" onClick = {()=> runModel('palisade')}>PALISADE</Dropdown.Item>
            <Dropdown.Item id="santafe" onClick = {()=> runModel('santafe')}>SANTA FE</Dropdown.Item>
            <Dropdown.Item id="tucson" onClick = {()=> runModel('tucson')}>TUCSON</Dropdown.Item>
            <Dropdown.Item id="venue" onClick = {()=> runModel('venue')}>VENUE</Dropdown.Item>
            <Dropdown.Item id="ioniq" onClick = {()=> runModel('ioniq')}>IONIQ</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>

            <Dropdown.Divider/>
          <Dropdown.Item>INFINITI</Dropdown.Item>
          <Dropdown.Divider/>
            <Dropdown.Item id="q30" onClick = {()=> runModel('q30')}>Q30</Dropdown.Item>
            <Dropdown.Item id="q45" onClick = {()=> runModel('q45')}>Q45</Dropdown.Item>
            <Dropdown.Item id="q50" onClick = {()=> runModel('q50')}>Q50</Dropdown.Item>
            <Dropdown.Item id="q60" onClick = {()=> runModel('q60')}>Q60</Dropdown.Item>
            <Dropdown.Item id="q70" onClick = {()=> runModel('q60')}>Q70</Dropdown.Item>
            <Dropdown.Item id="qx4" onClick = {()=> runModel('qx4')}>QX4</Dropdown.Item>
            <Dropdown.Item id="qx30" onClick = {()=> runModel('qx30')}>QX30</Dropdown.Item>
            <Dropdown.Item id="qx50" onClick = {()=> runModel('qx50')}>QX50</Dropdown.Item>
            <Dropdown.Item id="qx55" onClick = {()=> runModel('qx55')}>QX55</Dropdown.Item>
            <Dropdown.Item id="qx60" onClick = {()=> runModel('qx60')}>QX60</Dropdown.Item>
            <Dropdown.Item id="qx70" onClick = {()=> runModel('qx70')}>QX70</Dropdown.Item>
            <Dropdown.Item id="qx80" onClick = {()=> runModel('qx80')}>QX80</Dropdown.Item>
            <Dropdown.Item id="q50l" onClick = {()=> runModel('q50l')}>Q50L</Dropdown.Item>
            <Dropdown.Item id="esq" onClick = {()=> runModel('esq')}>ESQ</Dropdown.Item>
            <Dropdown.Item id="ex" onClick = {()=> runModel('ex')}>EX</Dropdown.Item>
            <Dropdown.Item id="fx" onClick = {()=> runModel('fx')}>FX</Dropdown.Item>
            <Dropdown.Item id="g35" onClick = {()=> runModel('g35')}>G35</Dropdown.Item>
            <Dropdown.Item id="i" onClick = {()=> runModel('i')}>I</Dropdown.Item>
            <Dropdown.Item id="m35" onClick = {()=> runModel('m35')}>M35</Dropdown.Item>
            <Dropdown.Item id="m45" onClick = {()=> runModel('m45')}>M45</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>

        <Dropdown.Divider/>
        <Dropdown.Item>JEEP</Dropdown.Item>
        <Dropdown.Divider/>
            <Dropdown.Item id="wrangler" onClick = {()=> runModel('wrangler')}>WRANGLER</Dropdown.Item>
            <Dropdown.Item id="cherokee" onClick = {()=> runModel('cherokee')}>CHEROKEE</Dropdown.Item>
            <Dropdown.Item id="commander" onClick = {()=> runModel('commander')}>COMMANDER</Dropdown.Item>
            <Dropdown.Item id="grandcommander" onClick = {()=> runModel('grandcommander')}>GRAND COMMANDER</Dropdown.Item>
            <Dropdown.Item id="compass" onClick = {()=> runModel('compass')}>COMPASS</Dropdown.Item>
            <Dropdown.Item id="liberty " onClick = {()=> runModel('liberty')}>LIBERTY</Dropdown.Item>
            <Dropdown.Item id="grandcherokee" onClick = {()=> runModel('grandcherokee')}>GRAND CHEROKEE</Dropdown.Item>
            <Dropdown.Item id="renegade" onClick = {()=> runModel('renegade')}>RENEGADE</Dropdown.Item>
            <Dropdown.Item id="gladiator" onClick = {()=> runModel('gladiator')}>GLADIATOR</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>

            <Dropdown.Divider/>
            <Dropdown.Item>KIA</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item id="forte" onClick = {()=> runModel('forte')}>FORTE</Dropdown.Item>
            <Dropdown.Item id="rio" onClick = {()=> runModel('rio')}>RIO</Dropdown.Item>
            <Dropdown.Item id="soul" onClick = {()=> runModel('soul=')}>SOUL</Dropdown.Item>
            <Dropdown.Item id="optima" onClick = {()=> runModel('optima')}>OPTIMA</Dropdown.Item>
            <Dropdown.Item id="stinger" onClick = {()=> runModel('stinger')}>STINGER</Dropdown.Item>
            <Dropdown.Item id="niro" onClick = {()=> runModel('niro')}>NIRO</Dropdown.Item>
            <Dropdown.Item id="seltos" onClick = {()=> runModel('seltos')}>SELTOS</Dropdown.Item>
            <Dropdown.Item id="sorento" onClick = {()=> runModel('sorento')}>SORENTO</Dropdown.Item>
            <Dropdown.Item id="sportage" onClick = {()=> runModel('sportage')}>SPORTAGE</Dropdown.Item>
            <Dropdown.Item id="telluride" onClick = {()=> runModel('telluride')}>TELLURIDE</Dropdown.Item>
            <Dropdown.Item id="carnival" onClick = {()=> runModel('carnival')}>CARNIVAL</Dropdown.Item>

            <Dropdown.Divider/>
             <Dropdown.Item>LEXUS</Dropdown.Item>
             <Dropdown.Divider/>
             <DropdownItem id="ct" onClick = {()=> runModel('ct')}>CT</DropdownItem>
             <DropdownItem id="es" onClick = {()=> runModel('es')}>ES</DropdownItem>
             <DropdownItem id="is" onClick = {()=> runModel('is')}>IS</DropdownItem>
             <DropdownItem id="ls" onClick = {()=> runModel('ls')}>LS</DropdownItem>
             <DropdownItem id="rc" onClick = {()=> runModel('rc')}>RC </DropdownItem>
             <DropdownItem id="nx" onClick = {()=> runModel('nx')}>NX</DropdownItem>
             <DropdownItem id="rx" onClick = {()=> runModel('rx')}>RX</DropdownItem>
             <DropdownItem id="ux" onClick = {()=> runModel('ux')}>UX</DropdownItem>
             <DropdownItem id="gx" onClick = {()=> runModel('gx')}>GX</DropdownItem>
             <DropdownItem id="ls" onClick = {()=> runModel('lx')}>LX</DropdownItem>
             <DropdownItem id="lm" onClick = {()=> runModel('lm')}>LM</DropdownItem>
       
            <Dropdown.Divider/>
            <Dropdown.Item>NISSAN</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item id="sentra" onClick = {()=> runModel('sentra')}>SENTRA</Dropdown.Item>
            <Dropdown.Item id="altima" onClick = {()=> runModel('altima')}>ALTIMA</Dropdown.Item>
            <Dropdown.Item id="maxima" onClick = {()=> runModel('maxima')}>MAXIMA</Dropdown.Item>
            <Dropdown.Item id="pathfinder" onClick = {()=> runModel('pathfinder')}>PATHFINDER</Dropdown.Item>
            <Dropdown.Item id="rogue" onClick = {()=> runModel('rogue')}>ROGUE</Dropdown.Item>
            <Dropdown.Item id="murano" onClick = {()=> runModel('murano')}>MURANO</Dropdown.Item>
            <Dropdown.Item id="xterra" onClick = {()=> runModel('xterra')}>XTERRA</Dropdown.Item>
            <Dropdown.Item id="leaf" onClick = {()=> runModel('leaf')}>LEAF</Dropdown.Item>
            <Dropdown.Item id="titan" onClick = {()=> runModel('titan')}>TITAN</Dropdown.Item>
            <Dropdown.Item id="juke" onClick = {()=> runModel('juke')}>JUKE </Dropdown.Item>
            <Dropdown.Item id="patrol" onClick = {()=> runModel('patrol')}>PATROL</Dropdown.Item>
            <Dropdown.Item id="armada" onClick = {()=> runModel('armada')}>ARMADA</Dropdown.Item>
            <Dropdown.Item id="frontier" onClick = {()=> runModel('frontier')}>FRONTIER</Dropdown.Item>
            <Dropdown.Item id="nv" onClick = {()=> runModel('nv')}>NV</Dropdown.Item>

            <Dropdown.Divider/>
            <Dropdown.Item>MAZDA</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item id="mazda2" onClick = {()=> runModel('mazda2')}>MAZDA2</Dropdown.Item>
            <Dropdown.Item id="mazda3" onClick = {()=> runModel('mazda3')}>MAZDA3</Dropdown.Item>
            <Dropdown.Item id="mazda6" onClick = {()=> runModel('mazda6')}>MAZDA6</Dropdown.Item>
            <Dropdown.Item id="cx-3" onClick = {()=> runModel('cx-3')}>CX-3</Dropdown.Item>
            <Dropdown.Item id="cx-30" onClick = {()=> runModel('cx-30')}>CX-30</Dropdown.Item>
            <Dropdown.Item id="cx-40" onClick = {()=> runModel('cx-40')}>CX-40</Dropdown.Item>
            <Dropdown.Item id="cx-4" onClick = {()=> runModel('cx-4')}>CX-4</Dropdown.Item>
            <Dropdown.Item id="cx-5" onClick = {()=> runModel('cx-5')}>CX-5</Dropdown.Item>
            <Dropdown.Item id="cx-8" onClick = {()=> runModel('cx-8')}>CX-8</Dropdown.Item>
            <Dropdown.Item id="cx-9" onClick={()=> runModel('cx-9')}>CX-9</Dropdown.Item>
      
            <Dropdown.Divider/>
            <Dropdown.Item>PONTIAC</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>G3</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>G5</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>G8</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>GRAND PRIX</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>TORRENT</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>SOLSTICE</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>G6</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>TRANS SPORT</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>FIERO</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>SUNFIRE</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>MONTANA</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>AZTEK</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>VIBE</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>
            <Dropdown.Item id="cl" onClick = {()=> runModel('cl')}>CL</Dropdown.Item>

            <Dropdown.Divider/>
            <Dropdown.Item>SUBARU</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item id="impreza" onClick = {()=> runModel('impreza')}>IMPREZA</Dropdown.Item>
            <Dropdown.Item id="legacy" onClick = {()=> runModel('legacy')}>LEGACY</Dropdown.Item>
            <Dropdown.Item id="levorg" onClick = {()=> runModel('levorg')}>LEVORG</Dropdown.Item>
            <Dropdown.Item id="wrx" onClick = {()=> runModel('wrx')}>WRX</Dropdown.Item>
            <Dropdown.Item id="ascent" onClick = {()=> runModel('ascent')}>ASCENT</Dropdown.Item>
            <Dropdown.Item id="forester" onClick = {()=> runModel('forester')}>FORESTER</Dropdown.Item>
            <Dropdown.Item id="outback" onClick = {()=> runModel('outback')}>OUTBACK</Dropdown.Item>

            <Dropdown.Divider/>
            <Dropdown.Item>TOYOTA</Dropdown.Item>
            <Dropdown.Divider />
             <DropdownItem id="avalon" onClick = {()=> runModel('avalon')}>AVALON</DropdownItem>
             <DropdownItem id="camry" onClick = {()=> runModel('camry')}>CAMRY</DropdownItem>
             <DropdownItem id="corolla" onClick = {()=> runModel('corolla')}>COROLLA</DropdownItem>
             <DropdownItem id="highlander" onClick = {()=> runModel('highlander')}>HIGHLANDER</DropdownItem>
             <DropdownItem id="4runner" onClick = {()=> runModel('4runner')}>4RUNNER</DropdownItem>
             <DropdownItem id="rav4" onClick = {()=> runModel('rav4')}>RAV4</DropdownItem>
             <DropdownItem id="tacoma" onClick = {()=> runModel('tacoma')}>TACOMA</DropdownItem>
             <DropdownItem id="tundra" onClick = {()=> runModel('tundra')}>TUNDRA</DropdownItem>

            <Dropdown.Divider/>
            <Dropdown.Item>VOLVO</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item id="940/960" onClick = {()=> runModel('940/960')}>940/960</Dropdown.Item>
            <Dropdown.Item id="850" onClick = {()=> runModel('850')}>850</Dropdown.Item>
            <Dropdown.Item id="S40/V40" onClick = {()=> runModel('S40/V40')}>S40/V40</Dropdown.Item>
            <Dropdown.Item id="S70/V70" onClick = {()=> runModel('S70/V70')}>S70/V70</Dropdown.Item>
            <Dropdown.Item id="S90/V90" onClick = {()=> runModel('S90/V90')}>S90/V90</Dropdown.Item>
            <Dropdown.Item id="C70" onClick = {()=> runModel('C70')}>C70</Dropdown.Item>
            <Dropdown.Item id="S80" onClick = {()=> runModel('S80')}>S80</Dropdown.Item>
            <Dropdown.Item id="S60" onClick = {()=> runModel('S60')}>S60</Dropdown.Item>
            <Dropdown.Item id="V70/XC70" onClick = {()=> runModel('V70/XC70')}>V70/XC70</Dropdown.Item>
            <Dropdown.Item id="XC90" onClick = {()=> runModel('XC90')}>XC90</Dropdown.Item>
            <Dropdown.Item id="S40V40" onClick = {()=> runModel('S40/V40')}>S40/V40</Dropdown.Item>
            <Dropdown.Item id="c40" onClick = {()=> runModel('c40')}>C40</Dropdown.Item>
            <Dropdown.Item id="c30" onClick = {()=> runModel('c30')}>C30</Dropdown.Item>
            <Dropdown.Item id="c70" onClick = {()=> runModel('c70')}>C70</Dropdown.Item>
            <Dropdown.Item id="s80" onClick = {()=> runModel('S80')}>S80</Dropdown.Item>
            <Dropdown.Item id="v70/xc70" onClick = {()=> runModel('v70/xc70')}>V70/XC70</Dropdown.Item>
            <Dropdown.Item id="xc60" onClick = {()=> runModel('xc60')}>XC60</Dropdown.Item>
            <Dropdown.Item id="s60/v60" onClick = {()=> runModel('s60/v60')}>S60/V60</Dropdown.Item>
            <Dropdown.Item id="v40" onClick = {()=> runModel('v40')}>V40</Dropdown.Item>
            <Dropdown.Item id="xcclassic" onClick = {()=> runModel('xcclassic')}>XC CLASSIC</Dropdown.Item>
            <Dropdown.Item id="xc60" onClick = {()=> runModel('xc60')}>XC60</Dropdown.Item>
            <Dropdown.Item id="xc40" onClick = {()=> runModel('xc40')}>XC40</Dropdown.Item>
            <Dropdown.Item id="xc90" onClick = {()=> runModel('xc90')}>XC90</Dropdown.Item>
            <Dropdown.Item id="s90/v90" onClick = {()=> runModel('s90/v90')}>S90/V90</Dropdown.Item>



            <Dropdown.Divider/>
            <Dropdown.Item>VOLKSWAGEN</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item id="beetle" onClick = {()=> runModel('bettle')}>BEETLE</Dropdown.Item>
            <Dropdown.Item id="golf" onClick = {()=> runModel('golf')}>GOLF</Dropdown.Item>
            <Dropdown.Item id="jetta" onClick = {()=> runModel('jetta')}>JETTA</Dropdown.Item>
            <Dropdown.Item id="passat" onClick = {()=> runModel('passat')}>PASSAT</Dropdown.Item>
            <Dropdown.Item id="tiguan" onClick = {()=> runModel('tiguan')}>TIGUAN</Dropdown.Item>
            <Dropdown.Item id="touareg" onClick = {()=> runModel('touareg')}>TOUAREG</Dropdown.Item>
            <Dropdown.Item id="touran" onClick = {()=> runModel('touran')}>TOURAN</Dropdown.Item>
            <Dropdown.Item id="sharan" onClick = {()=> runModel('shran')}>SHARAN</Dropdown.Item>
    

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
