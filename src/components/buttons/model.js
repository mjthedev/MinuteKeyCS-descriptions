import React from 'react'; 
import ReactDom from 'react-dom';
import {Card, Button, DropdownButton, Dropdown} from "react-bootstrap"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {RunModel} from '../functions/runModel';


import { useSelector, useDispatch } from 'react-redux'
import { changeText } from '../../app/features/model/model'







export const Model = () => {

  const theModel = useSelector(state => state.model.value)
  const dispatch = useDispatch()
  


  let RunMeModel = (x) => {
      RunModel(x)
      dispatch(changeText())
  
  }



    return ( 

       <DropdownButton variant='success' id="dropdownmodel" title="Model">

       <Dropdown.Divider/>
       <Dropdown.Item>ACURA</Dropdown.Item>
       <Dropdown.Divider/>
         <Dropdown.Item id="slx" onClick = {()=> RunMeModel('slx')}>SLX</Dropdown.Item>
         <Dropdown.Item id="zdx" onClick = {()=> RunMeModel('zdx')}>ZDX</Dropdown.Item>
         <Dropdown.Item id="rl" onClick = {()=> RunMeModel('rl')}>RL</Dropdown.Item>
         <Dropdown.Item id="csx" onClick = {()=> RunMeModel('csx')}>CSX</Dropdown.Item>
         <Dropdown.Item id="tl" onClick = {()=> RunMeModel('tl')}>TL</Dropdown.Item>
         <Dropdown.Item id="tsx" onClick = {()=> RunMeModel('tsx')}>TSX</Dropdown.Item>
         <Dropdown.Item id="el" onClick = {()=> RunMeModel('el')}>EL</Dropdown.Item>
         <Dropdown.Item id="vigor" onClick = {()=> RunMeModel('vigor')}>VIGOR</Dropdown.Item>
         <Dropdown.Item id="integra" onClick = {()=> RunMeModel('integra')}>INTEGRA</Dropdown.Item>
         <Dropdown.Item id="legend" onClick = {()=> RunMeModel('legend')}>LEGEND</Dropdown.Item>
         <Dropdown.Item id="rlx" onClick = {()=> RunMeModel('rlx')}>RLX</Dropdown.Item>
         <Dropdown.Item id="rsx" onClick = {()=> RunMeModel('rsx')}>RSX</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="tsx" onClick = {()=> RunMeModel('tsx')}>TSX</Dropdown.Item>

     <Dropdown.Divider/>
     <Dropdown.Item>BUICK</Dropdown.Item>
     <Dropdown.Divider/>
         <Dropdown.Item id="excelle" onClick = {()=> RunMeModel('excelle')}>EXCELLE</Dropdown.Item>
         <Dropdown.Item id="excellegt" onClick = {()=> RunMeModel('excellegt')}>EXCELLE GT</Dropdown.Item>
         <Dropdown.Item id="lacrosse" onClick = {()=> RunMeModel('lacrosse')}>LACROSSE</Dropdown.Item>
         <Dropdown.Item id="regal" onClick = {()=> RunMeModel('regal')}>REGAL</Dropdown.Item>
         <Dropdown.Item id="velite6" onClick = {()=> RunMeModel('velite6')}>VELITE 6</Dropdown.Item>
         <Dropdown.Item id="velite7" onClick = {()=> RunMeModel('velite7')}>VELITE 7</Dropdown.Item>
         <Dropdown.Item id="verano" onClick = {()=> RunMeModel('verano')}>VERANO</Dropdown.Item>
         <Dropdown.Item id="enclave" onClick = {()=> RunMeModel('enclave')}>ENCLAVE</Dropdown.Item>
         <Dropdown.Item id="encore" onClick = {()=> RunMeModel('encore')}>ENCORE</Dropdown.Item>
         <Dropdown.Item id="encoregx" onClick = {()=> RunMeModel('encoregx')}>ENCORE GX</Dropdown.Item>
         <Dropdown.Item id="envision" onClick = {()=> RunMeModel('envision')}>ENVISION</Dropdown.Item>
         <Dropdown.Item id="gl6" onClick = {()=> RunMeModel('gl6')}>GL6</Dropdown.Item>
         <Dropdown.Item id="gl8" onClick = {()=> RunMeModel('gl8')}>GL8</Dropdown.Item>

       <Dropdown.Divider/>
       <Dropdown.Item>CADILLAC</Dropdown.Item>
       <Dropdown.Divider/>
         <Dropdown.Item id="ct4" onClick = {()=> RunMeModel('ct4')}>CT4</Dropdown.Item>
         <Dropdown.Item id="ct5" onClick = {()=> RunMeModel('ct5')}>CT5</Dropdown.Item>
         <Dropdown.Item id="ct6" onClick = {()=> RunMeModel('ct6')}>CT6</Dropdown.Item>
         <Dropdown.Item id="escalade" onClick = {()=> RunMeModel('escalade')}>ESCALADE</Dropdown.Item>
         <Dropdown.Item id="escaladeesv" onClick = {()=> RunMeModel('escaladeesv')}>ESCALADE ESV</Dropdown.Item>
         <Dropdown.Item id="xt4" onClick = {()=> RunMeModel('xt4')}>XT4</Dropdown.Item>
         <Dropdown.Item id="xt5" onClick = {()=> RunMeModel('xt5')}>XT5</Dropdown.Item>
         <Dropdown.Item id="xt6" onClick = {()=> RunMeModel('xt6')}>XT6</Dropdown.Item>
         
         <Dropdown.Divider />
         <Dropdown.Item align='end'>CHEVORLET</Dropdown.Item>
         <Dropdown.Divider />
          <DropdownItem id="bolt" onClick = {()=> RunMeModel('bolt')}>BOLT</DropdownItem>
          <DropdownItem id="cruze" onClick = {()=> RunMeModel('cruze')}>CRUZE</DropdownItem>
          <DropdownItem id="colorado" onClick = {()=> RunMeModel('colorado')}>COLORADO</DropdownItem>
          <DropdownItem id="onyx" onClick = {()=> RunMeModel('onyx')}>ONYX</DropdownItem>
          <DropdownItem id="spark" onClick = {()=> RunMeModel('spark')}>SPARK</DropdownItem>
          <DropdownItem id="malibu" onClick = {()=> RunMeModel('malibu')}>MALIBU</DropdownItem>
          <DropdownItem id="cavalier" onClick = {()=> RunMeModel('cavalier')}>CAVALIER</DropdownItem>
          <DropdownItem id="corvette" onClick = {()=> RunMeModel('corvette')}>CORVETTE</DropdownItem>
          <DropdownItem id="camaro" onClick = {()=> RunMeModel('camaro')}>CAMARO</DropdownItem>
          <DropdownItem id="silverado" onClick = {()=> RunMeModel('silverado')}>SILVERADO</DropdownItem>
          <DropdownItem id="blazer" onClick = {()=> RunMeModel('blazer')}>BLAZER</DropdownItem>
          <DropdownItem id="equinox" onClick = {()=> RunMeModel('equinox')}>EQUINOX</DropdownItem>
          <DropdownItem id="surburban" onClick = {()=> RunMeModel('surburban')}>SURBURBAN</DropdownItem>
          <DropdownItem id="tahoe" onClick = {()=> RunMeModel('tahoe')}>TAHOE</DropdownItem>
          <DropdownItem id="trailblazer" onClick = {()=> RunMeModel('trailblazer')}>TRAILBLAZER</DropdownItem>
          <DropdownItem id="traverse" onClick = {()=> RunMeModel('traverse')}>TRAVERSE</DropdownItem>
          <DropdownItem id="trax" onClick = {()=> RunMeModel('trax')}>TRAX</DropdownItem>
          <DropdownItem id="express" onClick = {()=> RunMeModel('express')}>EXPRESS</DropdownItem>

          <Dropdown.Divider/>
         <Dropdown.Item>CHRYSLER</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item id="200" onClick = {()=> RunMeModel('200')}>200</Dropdown.Item>
         <Dropdown.Item id="300" onClick = {()=> RunMeModel('300')}>300</Dropdown.Item>
         <Dropdown.Item id="pacifica" onClick = {()=> RunMeModel('pacifica')}>PACIFICA</Dropdown.Item>
         <Dropdown.Item id="voyager" onClick = {()=> RunMeModel('voyager')}>VOYAGER</Dropdown.Item>

         <Dropdown.Divider />
         <Dropdown.Item>DODGE</Dropdown.Item>
         <Dropdown.Divider />
          <DropdownItem id="ram-1500" onClick = {()=> RunMeModel('ram-1500')}>RAM-1500</DropdownItem>
          <DropdownItem id="ram-2500" onClick = {()=> RunMeModel('ram-2500')}>RAM-2500</DropdownItem>
          <DropdownItem id="ram-3500" onClick = {()=> RunMeModel('ram-3500')}>RAM-3500</DropdownItem>
          <DropdownItem id="challenger" onClick = {()=> RunMeModel('challenger')}>CHALLENGER</DropdownItem>
          <DropdownItem id="journey" onClick = {()=> RunMeModel('journey')}>JOURNEY</DropdownItem>
          <DropdownItem id="caliber" onClick = {()=> RunMeModel('caliber')}>CALIBER</DropdownItem>
          <DropdownItem id="caravan" onClick = {()=> RunMeModel('caravan')}>CARAVAN</DropdownItem>
          <DropdownItem id="durango" onClick = {()=> RunMeModel('durango')}>DURANGO</DropdownItem>
          <DropdownItem id="attitude" onClick = {()=> RunMeModel('attitude')}>ATTITUDE</DropdownItem>
          <DropdownItem id="charger" onClick = {()=> RunMeModel('charger')}>CHARGER</DropdownItem>
          <DropdownItem id="neon" onClick = {()=> RunMeModel('neon')}>NEON</DropdownItem>

         <Dropdown.Divider/>
         <Dropdown.Item>FORD</Dropdown.Item>
         <Dropdown.Divider />
          <DropdownItem id="bronco" onClick = {()=> RunMeModel('bronco')}>BRONCO</DropdownItem>
          <DropdownItem id="broncosport" onClick = {()=> RunMeModel('broncosport')}>BRONCO SPORT</DropdownItem>
          <DropdownItem id="fiesta" onClick = {()=> RunMeModel('fiesta')}>FIESTA</DropdownItem>
          <DropdownItem id="f-150" onClick = {()=> RunMeModel('f-150')}>F-150</DropdownItem>
          <DropdownItem id="f-250" onClick = {()=> RunMeModel('f-250')}>F-250</DropdownItem>
          <DropdownItem id="f-350" onClick = {()=> RunMeModel('f-350')}>F-350</DropdownItem>
          <DropdownItem id="e-150" onClick = {()=> RunMeModel('e-150')}>E-150</DropdownItem>
          <DropdownItem id="e-250" onClick = {()=> RunMeModel('e-250')}>E-250</DropdownItem>
          <DropdownItem id="e-350" onClick = {()=> RunMeModel('e-350')}>E-350</DropdownItem>
          <DropdownItem id="focus" onClick = {()=> RunMeModel('focus')}>FOCUS</DropdownItem>
          <DropdownItem id="ka" onClick = {()=> RunMeModel('ka')}>KA</DropdownItem>
          <DropdownItem id="figo" onClick = {()=> RunMeModel('figo')}>FIGO</DropdownItem>
          <DropdownItem id="escort" onClick = {()=> RunMeModel('escort')}>ESCORT</DropdownItem>
          <DropdownItem id="aspire" onClick = {()=> RunMeModel('aspire')}>ASPIRE</DropdownItem>
          <DropdownItem id="fusion" onClick = {()=> RunMeModel('fusion')}>FUSION</DropdownItem>
          <DropdownItem id="taurus" onClick = {()=> RunMeModel('taurus')}>TAURUS</DropdownItem>
          <DropdownItem id="mondeo" onClick = {()=> RunMeModel('mondeo')}>MONDEO</DropdownItem>
          <DropdownItem id="mustang" onClick = {()=> RunMeModel('mustang')}>MUSTANG</DropdownItem>
          <DropdownItem id="ecosport" onClick = {()=> RunMeModel('ecosport')}>ECOSPORT</DropdownItem>
          <DropdownItem id="edge" onClick = {()=> RunMeModel('edge')}>EDGE</DropdownItem>
          <DropdownItem id="equator" onClick = {()=> RunMeModel('equator')}>EQUATOR</DropdownItem>
          <DropdownItem id="escape" onClick = {()=> RunMeModel('escape')}>ESCAPE</DropdownItem>
          <DropdownItem id="everest/endeavour" onClick = {()=> RunMeModel('everest/endeavour')}>EVEREST/ENDEAVOUR</DropdownItem>
          <DropdownItem id="evos" onClick = {()=> RunMeModel('evos')}>EVOS</DropdownItem>
          <DropdownItem id="expedition" onClick = {()=> RunMeModel('expedition')}>EXPEDIITON</DropdownItem>
          <DropdownItem id="explorer" onClick = {()=> RunMeModel('explorer')}>EXPLORER</DropdownItem>
          <DropdownItem id="mustangmache" onClick = {()=> RunMeModel('mustangmache')}>MUSTANG MACH-E</DropdownItem>
          <DropdownItem id="puma" onClick = {()=> RunMeModel('puma')}>PUMA</DropdownItem>
          <DropdownItem id="territory" onClick = {()=> RunMeModel('territory')}>TERRITORY</DropdownItem>
          <DropdownItem id="ranger" onClick = {()=> RunMeModel('ranger')}>RANGER</DropdownItem>
          <DropdownItem id="transit" onClick = {()=> RunMeModel('transit')}>TRANSIT</DropdownItem>
          <DropdownItem id="galaxy" onClick = {()=> RunMeModel('galaxy')}>GALAXY</DropdownItem>
          <DropdownItem id="superduty" onClick = {()=> RunMeModel('superduty')}>SUPERDUTY</DropdownItem>

          <Dropdown.Divider/>
         <Dropdown.Item>GMC</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item id="acadia" onClick = {()=> RunMeModel('acadia')}>ACADIA</Dropdown.Item>
         <Dropdown.Item id="terrain" onterrainick = {()=> RunMeModel('terrain')}>TERRAIN</Dropdown.Item>
         <Dropdown.Item id="yukon" onClick = {()=> RunMeModel('yukon')}>YUKON</Dropdown.Item>
         <Dropdown.Item id="yukonxl" onClick = {()=> RunMeModel('yukonxl')}>YUKON XL</Dropdown.Item>
         <Dropdown.Item id="canyon" onClick = {()=> RunMeModel('canyon')}>CANYON</Dropdown.Item>
         <Dropdown.Item id="sierra" onClick = {()=> RunMeModel('sierra')}>SIERRA</Dropdown.Item>
         <Dropdown.Item id="savana" onClick = {()=> RunMeModel('savana')}>SAVANA</Dropdown.Item>
         <Dropdown.Item id="hummer" onClick = {()=> RunMeModel('hummer')}>HUMMER</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>HONDA</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item id="civic" onClick = {()=> RunMeModel('civic')}>CIVIC</Dropdown.Item>
         <Dropdown.Item id="civictyper" onClick = {()=> RunMeModel('civictyper')}>CIVIC TYPE R</Dropdown.Item>
         <Dropdown.Item id="fit" onClick = {()=> RunMeModel('fit')}>FIT</Dropdown.Item>
         <Dropdown.Item id="accord" onClick = {()=> RunMeModel('accord')}>ACCORD</Dropdown.Item>
         <Dropdown.Item id="clarity" onClick = {()=> RunMeModel('clarity')}>CLARITY</Dropdown.Item>
         <Dropdown.Item id="insight" onClick = {()=> RunMeModel('insight')}>INSIGHT</Dropdown.Item>
         <Dropdown.Item id="passport" onClick = {()=> RunMeModel('passport')}>PASSPORT</Dropdown.Item>
         <Dropdown.Item id="pilot" onClick = {()=> RunMeModel('pilot')}>PILOT</Dropdown.Item>
         <Dropdown.Item id="crv" onClick = {()=> RunMeModel('crv')}>CR-V</Dropdown.Item>
         <Dropdown.Item id="ridgeline" onClick = {()=> RunMeModel('ridgeline')}>RIDGELINE</Dropdown.Item>
         <Dropdown.Item id="frontier" onClick = {()=> RunMeModel('frontier')}>FRONTIER</Dropdown.Item>
         
         <Dropdown.Divider/>
         <Dropdown.Item>HYUNDAI</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item id="accent" onClick = {()=> RunMeModel('accent')}>ACCENT</Dropdown.Item>
         <Dropdown.Item id="elantra" onClick = {()=> RunMeModel('elantra')}>ELANTRA</Dropdown.Item>
         <Dropdown.Item id="sonata" onClick = {()=> RunMeModel('sonata')}>SONATA</Dropdown.Item>
         <Dropdown.Item id="palisade" onClick = {()=> RunMeModel('palisade')}>PALISADE</Dropdown.Item>
         <Dropdown.Item id="santafe" onClick = {()=> RunMeModel('santafe')}>SANTA FE</Dropdown.Item>
         <Dropdown.Item id="tucson" onClick = {()=> RunMeModel('tucson')}>TUCSON</Dropdown.Item>
         <Dropdown.Item id="venue" onClick = {()=> RunMeModel('venue')}>VENUE</Dropdown.Item>
         <Dropdown.Item id="ioniq" onClick = {()=> RunMeModel('ioniq')}>IONIQ</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>

         <Dropdown.Divider/>
       <Dropdown.Item>INFINITI</Dropdown.Item>
       <Dropdown.Divider/>
         <Dropdown.Item id="q30" onClick = {()=> RunMeModel('q30')}>Q30</Dropdown.Item>
         <Dropdown.Item id="q45" onClick = {()=> RunMeModel('q45')}>Q45</Dropdown.Item>
         <Dropdown.Item id="q50" onClick = {()=> RunMeModel('q50')}>Q50</Dropdown.Item>
         <Dropdown.Item id="q60" onClick = {()=> RunMeModel('q60')}>Q60</Dropdown.Item>
         <Dropdown.Item id="q70" onClick = {()=> RunMeModel('q60')}>Q70</Dropdown.Item>
         <Dropdown.Item id="qx4" onClick = {()=> RunMeModel('qx4')}>QX4</Dropdown.Item>
         <Dropdown.Item id="qx30" onClick = {()=> RunMeModel('qx30')}>QX30</Dropdown.Item>
         <Dropdown.Item id="qx50" onClick = {()=> RunMeModel('qx50')}>QX50</Dropdown.Item>
         <Dropdown.Item id="qx55" onClick = {()=> RunMeModel('qx55')}>QX55</Dropdown.Item>
         <Dropdown.Item id="qx60" onClick = {()=> RunMeModel('qx60')}>QX60</Dropdown.Item>
         <Dropdown.Item id="qx70" onClick = {()=> RunMeModel('qx70')}>QX70</Dropdown.Item>
         <Dropdown.Item id="qx80" onClick = {()=> RunMeModel('qx80')}>QX80</Dropdown.Item>
         <Dropdown.Item id="q50l" onClick = {()=> RunMeModel('q50l')}>Q50L</Dropdown.Item>
         <Dropdown.Item id="esq" onClick = {()=> RunMeModel('esq')}>ESQ</Dropdown.Item>
         <Dropdown.Item id="ex" onClick = {()=> RunMeModel('ex')}>EX</Dropdown.Item>
         <Dropdown.Item id="fx" onClick = {()=> RunMeModel('fx')}>FX</Dropdown.Item>
         <Dropdown.Item id="g35" onClick = {()=> RunMeModel('g35')}>G35</Dropdown.Item>
         <Dropdown.Item id="i" onClick = {()=> RunMeModel('i')}>I</Dropdown.Item>
         <Dropdown.Item id="m35" onClick = {()=> RunMeModel('m35')}>M35</Dropdown.Item>
         <Dropdown.Item id="m45" onClick = {()=> RunMeModel('m45')}>M45</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>

     <Dropdown.Divider/>
     <Dropdown.Item>JEEP</Dropdown.Item>
     <Dropdown.Divider/>
         <Dropdown.Item id="wrangler" onClick = {()=> RunMeModel('wrangler')}>WRANGLER</Dropdown.Item>
         <Dropdown.Item id="cherokee" onClick = {()=> RunMeModel('cherokee')}>CHEROKEE</Dropdown.Item>
         <Dropdown.Item id="commander" onClick = {()=> RunMeModel('commander')}>COMMANDER</Dropdown.Item>
         <Dropdown.Item id="grandcommander" onClick = {()=> RunMeModel('grandcommander')}>GRAND COMMANDER</Dropdown.Item>
         <Dropdown.Item id="compass" onClick = {()=> RunMeModel('compass')}>COMPASS</Dropdown.Item>
         <Dropdown.Item id="liberty " onClick = {()=> RunMeModel('liberty')}>LIBERTY</Dropdown.Item>
         <Dropdown.Item id="grandcherokee" onClick = {()=> RunMeModel('grandcherokee')}>GRAND CHEROKEE</Dropdown.Item>
         <Dropdown.Item id="renegade" onClick = {()=> RunMeModel('renegade')}>RENEGADE</Dropdown.Item>
         <Dropdown.Item id="gladiator" onClick = {()=> RunMeModel('gladiator')}>GLADIATOR</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>KIA</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="forte" onClick = {()=> RunMeModel('forte')}>FORTE</Dropdown.Item>
         <Dropdown.Item id="rio" onClick = {()=> RunMeModel('rio')}>RIO</Dropdown.Item>
         <Dropdown.Item id="soul" onClick = {()=> RunMeModel('soul=')}>SOUL</Dropdown.Item>
         <Dropdown.Item id="optima" onClick = {()=> RunMeModel('optima')}>OPTIMA</Dropdown.Item>
         <Dropdown.Item id="stinger" onClick = {()=> RunMeModel('stinger')}>STINGER</Dropdown.Item>
         <Dropdown.Item id="niro" onClick = {()=> RunMeModel('niro')}>NIRO</Dropdown.Item>
         <Dropdown.Item id="seltos" onClick = {()=> RunMeModel('seltos')}>SELTOS</Dropdown.Item>
         <Dropdown.Item id="sorento" onClick = {()=> RunMeModel('sorento')}>SORENTO</Dropdown.Item>
         <Dropdown.Item id="sportage" onClick = {()=> RunMeModel('sportage')}>SPORTAGE</Dropdown.Item>
         <Dropdown.Item id="telluride" onClick = {()=> RunMeModel('telluride')}>TELLURIDE</Dropdown.Item>
         <Dropdown.Item id="carnival" onClick = {()=> RunMeModel('carnival')}>CARNIVAL</Dropdown.Item>

         <Dropdown.Divider/>
          <Dropdown.Item>LEXUS</Dropdown.Item>
          <Dropdown.Divider/>
          <DropdownItem id="ct" onClick = {()=> RunMeModel('ct')}>CT</DropdownItem>
          <DropdownItem id="es" onClick = {()=> RunMeModel('es')}>ES</DropdownItem>
          <DropdownItem id="is" onClick = {()=> RunMeModel('is')}>IS</DropdownItem>
          <DropdownItem id="ls" onClick = {()=> RunMeModel('ls')}>LS</DropdownItem>
          <DropdownItem id="rc" onClick = {()=> RunMeModel('rc')}>RC </DropdownItem>
          <DropdownItem id="nx" onClick = {()=> RunMeModel('nx')}>NX</DropdownItem>
          <DropdownItem id="rx" onClick = {()=> RunMeModel('rx')}>RX</DropdownItem>
          <DropdownItem id="ux" onClick = {()=> RunMeModel('ux')}>UX</DropdownItem>
          <DropdownItem id="gx" onClick = {()=> RunMeModel('gx')}>GX</DropdownItem>
          <DropdownItem id="ls" onClick = {()=> RunMeModel('lx')}>LX</DropdownItem>
          <DropdownItem id="lm" onClick = {()=> RunMeModel('lm')}>LM</DropdownItem>
    
         <Dropdown.Divider/>
         <Dropdown.Item>NISSAN</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="sentra" onClick = {()=> RunMeModel('sentra')}>SENTRA</Dropdown.Item>
         <Dropdown.Item id="altima" onClick = {()=> RunMeModel('altima')}>ALTIMA</Dropdown.Item>
         <Dropdown.Item id="maxima" onClick = {()=> RunMeModel('maxima')}>MAXIMA</Dropdown.Item>
         <Dropdown.Item id="pathfinder" onClick = {()=> RunMeModel('pathfinder')}>PATHFINDER</Dropdown.Item>
         <Dropdown.Item id="rogue" onClick = {()=> RunMeModel('rogue')}>ROGUE</Dropdown.Item>
         <Dropdown.Item id="murano" onClick = {()=> RunMeModel('murano')}>MURANO</Dropdown.Item>
         <Dropdown.Item id="xterra" onClick = {()=> RunMeModel('xterra')}>XTERRA</Dropdown.Item>
         <Dropdown.Item id="leaf" onClick = {()=> RunMeModel('leaf')}>LEAF</Dropdown.Item>
         <Dropdown.Item id="titan" onClick = {()=> RunMeModel('titan')}>TITAN</Dropdown.Item>
         <Dropdown.Item id="juke" onClick = {()=> RunMeModel('juke')}>JUKE </Dropdown.Item>
         <Dropdown.Item id="patrol" onClick = {()=> RunMeModel('patrol')}>PATROL</Dropdown.Item>
         <Dropdown.Item id="armada" onClick = {()=> RunMeModel('armada')}>ARMADA</Dropdown.Item>
         <Dropdown.Item id="frontier" onClick = {()=> RunMeModel('frontier')}>FRONTIER</Dropdown.Item>
         <Dropdown.Item id="nv" onClick = {()=> RunMeModel('nv')}>NV</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>MAZDA</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="mazda2" onClick = {()=> RunMeModel('mazda2')}>MAZDA2</Dropdown.Item>
         <Dropdown.Item id="mazda3" onClick = {()=> RunMeModel('mazda3')}>MAZDA3</Dropdown.Item>
         <Dropdown.Item id="mazda6" onClick = {()=> RunMeModel('mazda6')}>MAZDA6</Dropdown.Item>
         <Dropdown.Item id="cx-3" onClick = {()=> RunMeModel('cx-3')}>CX-3</Dropdown.Item>
         <Dropdown.Item id="cx-30" onClick = {()=> RunMeModel('cx-30')}>CX-30</Dropdown.Item>
         <Dropdown.Item id="cx-40" onClick = {()=> RunMeModel('cx-40')}>CX-40</Dropdown.Item>
         <Dropdown.Item id="cx-4" onClick = {()=> RunMeModel('cx-4')}>CX-4</Dropdown.Item>
         <Dropdown.Item id="cx-5" onClick = {()=> RunMeModel('cx-5')}>CX-5</Dropdown.Item>
         <Dropdown.Item id="cx-8" onClick = {()=> RunMeModel('cx-8')}>CX-8</Dropdown.Item>
         <Dropdown.Item id="cx-9" onClick={()=> RunMeModel('cx-9')}>CX-9</Dropdown.Item>
   
         <Dropdown.Divider/>
         <Dropdown.Item>PONTIAC</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>G3</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>G5</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>G8</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>GRAND PRIX</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>TORRENT</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>SOLSTICE</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>G6</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>TRANS SPORT</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>FIERO</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>SUNFIRE</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>MONTANA</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>AZTEK</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>VIBE</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunMeModel('cl')}>CL</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>SUBARU</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="impreza" onClick = {()=> RunMeModel('impreza')}>IMPREZA</Dropdown.Item>
         <Dropdown.Item id="legacy" onClick = {()=> RunMeModel('legacy')}>LEGACY</Dropdown.Item>
         <Dropdown.Item id="levorg" onClick = {()=> RunMeModel('levorg')}>LEVORG</Dropdown.Item>
         <Dropdown.Item id="wrx" onClick = {()=> RunMeModel('wrx')}>WRX</Dropdown.Item>
         <Dropdown.Item id="ascent" onClick = {()=> RunMeModel('ascent')}>ASCENT</Dropdown.Item>
         <Dropdown.Item id="forester" onClick = {()=> RunMeModel('forester')}>FORESTER</Dropdown.Item>
         <Dropdown.Item id="outback" onClick = {()=> RunMeModel('outback')}>OUTBACK</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>TOYOTA</Dropdown.Item>
         <Dropdown.Divider />
          <DropdownItem id="avalon" onClick = {()=> RunMeModel('avalon')}>AVALON</DropdownItem>
          <DropdownItem id="camry" onClick = {()=> RunMeModel('camry')}>CAMRY</DropdownItem>
          <DropdownItem id="corolla" onClick = {()=> RunMeModel('corolla')}>COROLLA</DropdownItem>
          <DropdownItem id="highlander" onClick = {()=> RunMeModel('highlander')}>HIGHLANDER</DropdownItem>
          <DropdownItem id="4runner" onClick = {()=> RunMeModel('4runner')}>4RUNNER</DropdownItem>
          <DropdownItem id="rav4" onClick = {()=> RunMeModel('rav4')}>RAV4</DropdownItem>
          <DropdownItem id="tacoma" onClick = {()=> RunMeModel('tacoma')}>TACOMA</DropdownItem>
          <DropdownItem id="tundra" onClick = {()=> RunMeModel('tundra')}>TUNDRA</DropdownItem>

         <Dropdown.Divider/>
         <Dropdown.Item>VOLVO</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="940/960" onClick = {()=> RunMeModel('940/960')}>940/960</Dropdown.Item>
         <Dropdown.Item id="850" onClick = {()=> RunMeModel('850')}>850</Dropdown.Item>
         <Dropdown.Item id="S40/V40" onClick = {()=> RunMeModel('S40/V40')}>S40/V40</Dropdown.Item>
         <Dropdown.Item id="S70/V70" onClick = {()=> RunMeModel('S70/V70')}>S70/V70</Dropdown.Item>
         <Dropdown.Item id="S90/V90" onClick = {()=> RunMeModel('S90/V90')}>S90/V90</Dropdown.Item>
         <Dropdown.Item id="C70" onClick = {()=> RunMeModel('C70')}>C70</Dropdown.Item>
         <Dropdown.Item id="S80" onClick = {()=> RunMeModel('S80')}>S80</Dropdown.Item>
         <Dropdown.Item id="S60" onClick = {()=> RunMeModel('S60')}>S60</Dropdown.Item>
         <Dropdown.Item id="V70/XC70" onClick = {()=> RunMeModel('V70/XC70')}>V70/XC70</Dropdown.Item>
         <Dropdown.Item id="XC90" onClick = {()=> RunMeModel('XC90')}>XC90</Dropdown.Item>
         <Dropdown.Item id="S40V40" onClick = {()=> RunMeModel('S40/V40')}>S40/V40</Dropdown.Item>
         <Dropdown.Item id="c40" onClick = {()=> RunMeModel('c40')}>C40</Dropdown.Item>
         <Dropdown.Item id="c30" onClick = {()=> RunMeModel('c30')}>C30</Dropdown.Item>
         <Dropdown.Item id="c70" onClick = {()=> RunMeModel('c70')}>C70</Dropdown.Item>
         <Dropdown.Item id="s80" onClick = {()=> RunMeModel('S80')}>S80</Dropdown.Item>
         <Dropdown.Item id="v70/xc70" onClick = {()=> RunMeModel('v70/xc70')}>V70/XC70</Dropdown.Item>
         <Dropdown.Item id="xc60" onClick = {()=> RunMeModel('xc60')}>XC60</Dropdown.Item>
         <Dropdown.Item id="s60/v60" onClick = {()=> RunMeModel('s60/v60')}>S60/V60</Dropdown.Item>
         <Dropdown.Item id="v40" onClick = {()=> RunMeModel('v40')}>V40</Dropdown.Item>
         <Dropdown.Item id="xcclassic" onClick = {()=> RunMeModel('xcclassic')}>XC CLASSIC</Dropdown.Item>
         <Dropdown.Item id="xc60" onClick = {()=> RunMeModel('xc60')}>XC60</Dropdown.Item>
         <Dropdown.Item id="xc40" onClick = {()=> RunMeModel('xc40')}>XC40</Dropdown.Item>
         <Dropdown.Item id="xc90" onClick = {()=> RunMeModel('xc90')}>XC90</Dropdown.Item>
         <Dropdown.Item id="s90/v90" onClick = {()=> RunMeModel('s90/v90')}>S90/V90</Dropdown.Item>



         <Dropdown.Divider/>
         <Dropdown.Item>VOLKSWAGEN</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="beetle" onClick = {()=> RunMeModel('bettle')}>BEETLE</Dropdown.Item>
         <Dropdown.Item id="golf" onClick = {()=> RunMeModel('golf')}>GOLF</Dropdown.Item>
         <Dropdown.Item id="jetta" onClick = {()=> RunMeModel('jetta')}>JETTA</Dropdown.Item>
         <Dropdown.Item id="passat" onClick = {()=> RunMeModel('passat')}>PASSAT</Dropdown.Item>
         <Dropdown.Item id="tiguan" onClick = {()=> RunMeModel('tiguan')}>TIGUAN</Dropdown.Item>
         <Dropdown.Item id="touareg" onClick = {()=> RunMeModel('touareg')}>TOUAREG</Dropdown.Item>
         <Dropdown.Item id="touran" onClick = {()=> RunMeModel('touran')}>TOURAN</Dropdown.Item>
         <Dropdown.Item id="sharan" onClick = {()=> RunMeModel('shran')}>SHARAN</Dropdown.Item>
 

       </DropdownButton>

    )
}


export default Model

