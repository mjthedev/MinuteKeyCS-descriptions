import React from 'react'; 
import ReactDom from 'react-dom';
import {Card, Button, DropdownButton, Dropdown} from "react-bootstrap"
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import {RunModel} from '../functions/runModel'







export const Model = () => {

    return ( 

       <DropdownButton variant='success' id="dropdownmodel" title="Model">

       <Dropdown.Divider/>
       <Dropdown.Item>ACURA</Dropdown.Item>
       <Dropdown.Divider/>
         <Dropdown.Item id="slx" onClick = {()=> RunModel('slx')}>SLX</Dropdown.Item>
         <Dropdown.Item id="zdx" onClick = {()=> RunModel('zdx')}>ZDX</Dropdown.Item>
         <Dropdown.Item id="rl" onClick = {()=> RunModel('rl')}>RL</Dropdown.Item>
         <Dropdown.Item id="csx" onClick = {()=> RunModel('csx')}>CSX</Dropdown.Item>
         <Dropdown.Item id="tl" onClick = {()=> RunModel('tl')}>TL</Dropdown.Item>
         <Dropdown.Item id="tsx" onClick = {()=> RunModel('tsx')}>TSX</Dropdown.Item>
         <Dropdown.Item id="el" onClick = {()=> RunModel('el')}>EL</Dropdown.Item>
         <Dropdown.Item id="vigor" onClick = {()=> RunModel('vigor')}>VIGOR</Dropdown.Item>
         <Dropdown.Item id="integra" onClick = {()=> RunModel('integra')}>INTEGRA</Dropdown.Item>
         <Dropdown.Item id="legend" onClick = {()=> RunModel('legend')}>LEGEND</Dropdown.Item>
         <Dropdown.Item id="rlx" onClick = {()=> RunModel('rlx')}>RLX</Dropdown.Item>
         <Dropdown.Item id="rsx" onClick = {()=> RunModel('rsx')}>RSX</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="tsx" onClick = {()=> RunModel('tsx')}>TSX</Dropdown.Item>

     <Dropdown.Divider/>
     <Dropdown.Item>BUICK</Dropdown.Item>
     <Dropdown.Divider/>
         <Dropdown.Item id="excelle" onClick = {()=> RunModel('excelle')}>EXCELLE</Dropdown.Item>
         <Dropdown.Item id="excellegt" onClick = {()=> RunModel('excellegt')}>EXCELLE GT</Dropdown.Item>
         <Dropdown.Item id="lacrosse" onClick = {()=> RunModel('lacrosse')}>LACROSSE</Dropdown.Item>
         <Dropdown.Item id="regal" onClick = {()=> RunModel('regal')}>REGAL</Dropdown.Item>
         <Dropdown.Item id="velite6" onClick = {()=> RunModel('velite6')}>VELITE 6</Dropdown.Item>
         <Dropdown.Item id="velite7" onClick = {()=> RunModel('velite7')}>VELITE 7</Dropdown.Item>
         <Dropdown.Item id="verano" onClick = {()=> RunModel('verano')}>VERANO</Dropdown.Item>
         <Dropdown.Item id="enclave" onClick = {()=> RunModel('enclave')}>ENCLAVE</Dropdown.Item>
         <Dropdown.Item id="encore" onClick = {()=> RunModel('encore')}>ENCORE</Dropdown.Item>
         <Dropdown.Item id="encoregx" onClick = {()=> RunModel('encoregx')}>ENCORE GX</Dropdown.Item>
         <Dropdown.Item id="envision" onClick = {()=> RunModel('envision')}>ENVISION</Dropdown.Item>
         <Dropdown.Item id="gl6" onClick = {()=> RunModel('gl6')}>GL6</Dropdown.Item>
         <Dropdown.Item id="gl8" onClick = {()=> RunModel('gl8')}>GL8</Dropdown.Item>

       <Dropdown.Divider/>
       <Dropdown.Item>CADILLAC</Dropdown.Item>
       <Dropdown.Divider/>
         <Dropdown.Item id="ct4" onClick = {()=> RunModel('ct4')}>CT4</Dropdown.Item>
         <Dropdown.Item id="ct5" onClick = {()=> RunModel('ct5')}>CT5</Dropdown.Item>
         <Dropdown.Item id="ct6" onClick = {()=> RunModel('ct6')}>CT6</Dropdown.Item>
         <Dropdown.Item id="escalade" onClick = {()=> RunModel('escalade')}>ESCALADE</Dropdown.Item>
         <Dropdown.Item id="escaladeesv" onClick = {()=> RunModel('escaladeesv')}>ESCALADE ESV</Dropdown.Item>
         <Dropdown.Item id="xt4" onClick = {()=> RunModel('xt4')}>XT4</Dropdown.Item>
         <Dropdown.Item id="xt5" onClick = {()=> RunModel('xt5')}>XT5</Dropdown.Item>
         <Dropdown.Item id="xt6" onClick = {()=> RunModel('xt6')}>XT6</Dropdown.Item>
         
         <Dropdown.Divider />
         <Dropdown.Item align='end'>CHEVORLET</Dropdown.Item>
         <Dropdown.Divider />
          <DropdownItem id="bolt" onClick = {()=> RunModel('bolt')}>BOLT</DropdownItem>
          <DropdownItem id="cruze" onClick = {()=> RunModel('cruze')}>CRUZE</DropdownItem>
          <DropdownItem id="colorado" onClick = {()=> RunModel('colorado')}>COLORADO</DropdownItem>
          <DropdownItem id="onyx" onClick = {()=> RunModel('onyx')}>ONYX</DropdownItem>
          <DropdownItem id="spark" onClick = {()=> RunModel('spark')}>SPARK</DropdownItem>
          <DropdownItem id="malibu" onClick = {()=> RunModel('malibu')}>MALIBU</DropdownItem>
          <DropdownItem id="cavalier" onClick = {()=> RunModel('cavalier')}>CAVALIER</DropdownItem>
          <DropdownItem id="corvette" onClick = {()=> RunModel('corvette')}>CORVETTE</DropdownItem>
          <DropdownItem id="camaro" onClick = {()=> RunModel('camaro')}>CAMARO</DropdownItem>
          <DropdownItem id="silverado" onClick = {()=> RunModel('silverado')}>SILVERADO</DropdownItem>
          <DropdownItem id="blazer" onClick = {()=> RunModel('blazer')}>BLAZER</DropdownItem>
          <DropdownItem id="equinox" onClick = {()=> RunModel('equinox')}>EQUINOX</DropdownItem>
          <DropdownItem id="surburban" onClick = {()=> RunModel('surburban')}>SURBURBAN</DropdownItem>
          <DropdownItem id="tahoe" onClick = {()=> RunModel('tahoe')}>TAHOE</DropdownItem>
          <DropdownItem id="trailblazer" onClick = {()=> RunModel('trailblazer')}>TRAILBLAZER</DropdownItem>
          <DropdownItem id="traverse" onClick = {()=> RunModel('traverse')}>TRAVERSE</DropdownItem>
          <DropdownItem id="trax" onClick = {()=> RunModel('trax')}>TRAX</DropdownItem>
          <DropdownItem id="express" onClick = {()=> RunModel('express')}>EXPRESS</DropdownItem>

          <Dropdown.Divider/>
         <Dropdown.Item>CHRYSLER</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item id="200" onClick = {()=> RunModel('200')}>200</Dropdown.Item>
         <Dropdown.Item id="300" onClick = {()=> RunModel('300')}>300</Dropdown.Item>
         <Dropdown.Item id="pacifica" onClick = {()=> RunModel('pacifica')}>PACIFICA</Dropdown.Item>
         <Dropdown.Item id="voyager" onClick = {()=> RunModel('voyager')}>VOYAGER</Dropdown.Item>

         <Dropdown.Divider />
         <Dropdown.Item>DODGE</Dropdown.Item>
         <Dropdown.Divider />
          <DropdownItem id="ram-1500" onClick = {()=> RunModel('ram-1500')}>RAM-1500</DropdownItem>
          <DropdownItem id="ram-2500" onClick = {()=> RunModel('ram-2500')}>RAM-2500</DropdownItem>
          <DropdownItem id="ram-3500" onClick = {()=> RunModel('ram-3500')}>RAM-3500</DropdownItem>
          <DropdownItem id="challenger" onClick = {()=> RunModel('challenger')}>CHALLENGER</DropdownItem>
          <DropdownItem id="journey" onClick = {()=> RunModel('journey')}>JOURNEY</DropdownItem>
          <DropdownItem id="caliber" onClick = {()=> RunModel('caliber')}>CALIBER</DropdownItem>
          <DropdownItem id="caravan" onClick = {()=> RunModel('caravan')}>CARAVAN</DropdownItem>
          <DropdownItem id="durango" onClick = {()=> RunModel('durango')}>DURANGO</DropdownItem>
          <DropdownItem id="attitude" onClick = {()=> RunModel('attitude')}>ATTITUDE</DropdownItem>
          <DropdownItem id="charger" onClick = {()=> RunModel('charger')}>CHARGER</DropdownItem>
          <DropdownItem id="neon" onClick = {()=> RunModel('neon')}>NEON</DropdownItem>

         <Dropdown.Divider/>
         <Dropdown.Item>FORD</Dropdown.Item>
         <Dropdown.Divider />
          <DropdownItem id="bronco" onClick = {()=> RunModel('bronco')}>BRONCO</DropdownItem>
          <DropdownItem id="broncosport" onClick = {()=> RunModel('broncosport')}>BRONCO SPORT</DropdownItem>
          <DropdownItem id="fiesta" onClick = {()=> RunModel('fiesta')}>FIESTA</DropdownItem>
          <DropdownItem id="f-150" onClick = {()=> RunModel('f-150')}>F-150</DropdownItem>
          <DropdownItem id="f-250" onClick = {()=> RunModel('f-250')}>F-250</DropdownItem>
          <DropdownItem id="f-350" onClick = {()=> RunModel('f-350')}>F-350</DropdownItem>
          <DropdownItem id="e-150" onClick = {()=> RunModel('e-150')}>E-150</DropdownItem>
          <DropdownItem id="e-250" onClick = {()=> RunModel('e-250')}>E-250</DropdownItem>
          <DropdownItem id="e-350" onClick = {()=> RunModel('e-350')}>E-350</DropdownItem>
          <DropdownItem id="focus" onClick = {()=> RunModel('focus')}>FOCUS</DropdownItem>
          <DropdownItem id="ka" onClick = {()=> RunModel('ka')}>KA</DropdownItem>
          <DropdownItem id="figo" onClick = {()=> RunModel('figo')}>FIGO</DropdownItem>
          <DropdownItem id="escort" onClick = {()=> RunModel('escort')}>ESCORT</DropdownItem>
          <DropdownItem id="aspire" onClick = {()=> RunModel('aspire')}>ASPIRE</DropdownItem>
          <DropdownItem id="fusion" onClick = {()=> RunModel('fusion')}>FUSION</DropdownItem>
          <DropdownItem id="taurus" onClick = {()=> RunModel('taurus')}>TAURUS</DropdownItem>
          <DropdownItem id="mondeo" onClick = {()=> RunModel('mondeo')}>MONDEO</DropdownItem>
          <DropdownItem id="mustang" onClick = {()=> RunModel('mustang')}>MUSTANG</DropdownItem>
          <DropdownItem id="ecosport" onClick = {()=> RunModel('ecosport')}>ECOSPORT</DropdownItem>
          <DropdownItem id="edge" onClick = {()=> RunModel('edge')}>EDGE</DropdownItem>
          <DropdownItem id="equator" onClick = {()=> RunModel('equator')}>EQUATOR</DropdownItem>
          <DropdownItem id="escape" onClick = {()=> RunModel('escape')}>ESCAPE</DropdownItem>
          <DropdownItem id="everest/endeavour" onClick = {()=> RunModel('everest/endeavour')}>EVEREST/ENDEAVOUR</DropdownItem>
          <DropdownItem id="evos" onClick = {()=> RunModel('evos')}>EVOS</DropdownItem>
          <DropdownItem id="expedition" onClick = {()=> RunModel('expedition')}>EXPEDIITON</DropdownItem>
          <DropdownItem id="explorer" onClick = {()=> RunModel('explorer')}>EXPLORER</DropdownItem>
          <DropdownItem id="mustangmache" onClick = {()=> RunModel('mustangmache')}>MUSTANG MACH-E</DropdownItem>
          <DropdownItem id="puma" onClick = {()=> RunModel('puma')}>PUMA</DropdownItem>
          <DropdownItem id="territory" onClick = {()=> RunModel('territory')}>TERRITORY</DropdownItem>
          <DropdownItem id="ranger" onClick = {()=> RunModel('ranger')}>RANGER</DropdownItem>
          <DropdownItem id="transit" onClick = {()=> RunModel('transit')}>TRANSIT</DropdownItem>
          <DropdownItem id="galaxy" onClick = {()=> RunModel('galaxy')}>GALAXY</DropdownItem>
          <DropdownItem id="superduty" onClick = {()=> RunModel('superduty')}>SUPERDUTY</DropdownItem>

          <Dropdown.Divider/>
         <Dropdown.Item>GMC</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item id="acadia" onClick = {()=> RunModel('acadia')}>ACADIA</Dropdown.Item>
         <Dropdown.Item id="terrain" onterrainick = {()=> RunModel('terrain')}>TERRAIN</Dropdown.Item>
         <Dropdown.Item id="yukon" onClick = {()=> RunModel('yukon')}>YUKON</Dropdown.Item>
         <Dropdown.Item id="yukonxl" onClick = {()=> RunModel('yukonxl')}>YUKON XL</Dropdown.Item>
         <Dropdown.Item id="canyon" onClick = {()=> RunModel('canyon')}>CANYON</Dropdown.Item>
         <Dropdown.Item id="sierra" onClick = {()=> RunModel('sierra')}>SIERRA</Dropdown.Item>
         <Dropdown.Item id="savana" onClick = {()=> RunModel('savana')}>SAVANA</Dropdown.Item>
         <Dropdown.Item id="hummer" onClick = {()=> RunModel('hummer')}>HUMMER</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>HONDA</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item id="civic" onClick = {()=> RunModel('civic')}>CIVIC</Dropdown.Item>
         <Dropdown.Item id="civictyper" onClick = {()=> RunModel('civictyper')}>CIVIC TYPE R</Dropdown.Item>
         <Dropdown.Item id="fit" onClick = {()=> RunModel('fit')}>FIT</Dropdown.Item>
         <Dropdown.Item id="accord" onClick = {()=> RunModel('accord')}>ACCORD</Dropdown.Item>
         <Dropdown.Item id="clarity" onClick = {()=> RunModel('clarity')}>CLARITY</Dropdown.Item>
         <Dropdown.Item id="insight" onClick = {()=> RunModel('insight')}>INSIGHT</Dropdown.Item>
         <Dropdown.Item id="passport" onClick = {()=> RunModel('passport')}>PASSPORT</Dropdown.Item>
         <Dropdown.Item id="pilot" onClick = {()=> RunModel('pilot')}>PILOT</Dropdown.Item>
         <Dropdown.Item id="crv" onClick = {()=> RunModel('crv')}>CR-V</Dropdown.Item>
         <Dropdown.Item id="ridgeline" onClick = {()=> RunModel('ridgeline')}>RIDGELINE</Dropdown.Item>
         <Dropdown.Item id="frontier" onClick = {()=> RunModel('frontier')}>FRONTIER</Dropdown.Item>
         
         <Dropdown.Divider/>
         <Dropdown.Item>HYUNDAI</Dropdown.Item>
         <Dropdown.Divider />
         <Dropdown.Item id="accent" onClick = {()=> RunModel('accent')}>ACCENT</Dropdown.Item>
         <Dropdown.Item id="elantra" onClick = {()=> RunModel('elantra')}>ELANTRA</Dropdown.Item>
         <Dropdown.Item id="sonata" onClick = {()=> RunModel('sonata')}>SONATA</Dropdown.Item>
         <Dropdown.Item id="palisade" onClick = {()=> RunModel('palisade')}>PALISADE</Dropdown.Item>
         <Dropdown.Item id="santafe" onClick = {()=> RunModel('santafe')}>SANTA FE</Dropdown.Item>
         <Dropdown.Item id="tucson" onClick = {()=> RunModel('tucson')}>TUCSON</Dropdown.Item>
         <Dropdown.Item id="venue" onClick = {()=> RunModel('venue')}>VENUE</Dropdown.Item>
         <Dropdown.Item id="ioniq" onClick = {()=> RunModel('ioniq')}>IONIQ</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>

         <Dropdown.Divider/>
       <Dropdown.Item>INFINITI</Dropdown.Item>
       <Dropdown.Divider/>
         <Dropdown.Item id="q30" onClick = {()=> RunModel('q30')}>Q30</Dropdown.Item>
         <Dropdown.Item id="q45" onClick = {()=> RunModel('q45')}>Q45</Dropdown.Item>
         <Dropdown.Item id="q50" onClick = {()=> RunModel('q50')}>Q50</Dropdown.Item>
         <Dropdown.Item id="q60" onClick = {()=> RunModel('q60')}>Q60</Dropdown.Item>
         <Dropdown.Item id="q70" onClick = {()=> RunModel('q60')}>Q70</Dropdown.Item>
         <Dropdown.Item id="qx4" onClick = {()=> RunModel('qx4')}>QX4</Dropdown.Item>
         <Dropdown.Item id="qx30" onClick = {()=> RunModel('qx30')}>QX30</Dropdown.Item>
         <Dropdown.Item id="qx50" onClick = {()=> RunModel('qx50')}>QX50</Dropdown.Item>
         <Dropdown.Item id="qx55" onClick = {()=> RunModel('qx55')}>QX55</Dropdown.Item>
         <Dropdown.Item id="qx60" onClick = {()=> RunModel('qx60')}>QX60</Dropdown.Item>
         <Dropdown.Item id="qx70" onClick = {()=> RunModel('qx70')}>QX70</Dropdown.Item>
         <Dropdown.Item id="qx80" onClick = {()=> RunModel('qx80')}>QX80</Dropdown.Item>
         <Dropdown.Item id="q50l" onClick = {()=> RunModel('q50l')}>Q50L</Dropdown.Item>
         <Dropdown.Item id="esq" onClick = {()=> RunModel('esq')}>ESQ</Dropdown.Item>
         <Dropdown.Item id="ex" onClick = {()=> RunModel('ex')}>EX</Dropdown.Item>
         <Dropdown.Item id="fx" onClick = {()=> RunModel('fx')}>FX</Dropdown.Item>
         <Dropdown.Item id="g35" onClick = {()=> RunModel('g35')}>G35</Dropdown.Item>
         <Dropdown.Item id="i" onClick = {()=> RunModel('i')}>I</Dropdown.Item>
         <Dropdown.Item id="m35" onClick = {()=> RunModel('m35')}>M35</Dropdown.Item>
         <Dropdown.Item id="m45" onClick = {()=> RunModel('m45')}>M45</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>

     <Dropdown.Divider/>
     <Dropdown.Item>JEEP</Dropdown.Item>
     <Dropdown.Divider/>
         <Dropdown.Item id="wrangler" onClick = {()=> RunModel('wrangler')}>WRANGLER</Dropdown.Item>
         <Dropdown.Item id="cherokee" onClick = {()=> RunModel('cherokee')}>CHEROKEE</Dropdown.Item>
         <Dropdown.Item id="commander" onClick = {()=> RunModel('commander')}>COMMANDER</Dropdown.Item>
         <Dropdown.Item id="grandcommander" onClick = {()=> RunModel('grandcommander')}>GRAND COMMANDER</Dropdown.Item>
         <Dropdown.Item id="compass" onClick = {()=> RunModel('compass')}>COMPASS</Dropdown.Item>
         <Dropdown.Item id="liberty " onClick = {()=> RunModel('liberty')}>LIBERTY</Dropdown.Item>
         <Dropdown.Item id="grandcherokee" onClick = {()=> RunModel('grandcherokee')}>GRAND CHEROKEE</Dropdown.Item>
         <Dropdown.Item id="renegade" onClick = {()=> RunModel('renegade')}>RENEGADE</Dropdown.Item>
         <Dropdown.Item id="gladiator" onClick = {()=> RunModel('gladiator')}>GLADIATOR</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>KIA</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="forte" onClick = {()=> RunModel('forte')}>FORTE</Dropdown.Item>
         <Dropdown.Item id="rio" onClick = {()=> RunModel('rio')}>RIO</Dropdown.Item>
         <Dropdown.Item id="soul" onClick = {()=> RunModel('soul=')}>SOUL</Dropdown.Item>
         <Dropdown.Item id="optima" onClick = {()=> RunModel('optima')}>OPTIMA</Dropdown.Item>
         <Dropdown.Item id="stinger" onClick = {()=> RunModel('stinger')}>STINGER</Dropdown.Item>
         <Dropdown.Item id="niro" onClick = {()=> RunModel('niro')}>NIRO</Dropdown.Item>
         <Dropdown.Item id="seltos" onClick = {()=> RunModel('seltos')}>SELTOS</Dropdown.Item>
         <Dropdown.Item id="sorento" onClick = {()=> RunModel('sorento')}>SORENTO</Dropdown.Item>
         <Dropdown.Item id="sportage" onClick = {()=> RunModel('sportage')}>SPORTAGE</Dropdown.Item>
         <Dropdown.Item id="telluride" onClick = {()=> RunModel('telluride')}>TELLURIDE</Dropdown.Item>
         <Dropdown.Item id="carnival" onClick = {()=> RunModel('carnival')}>CARNIVAL</Dropdown.Item>

         <Dropdown.Divider/>
          <Dropdown.Item>LEXUS</Dropdown.Item>
          <Dropdown.Divider/>
          <DropdownItem id="ct" onClick = {()=> RunModel('ct')}>CT</DropdownItem>
          <DropdownItem id="es" onClick = {()=> RunModel('es')}>ES</DropdownItem>
          <DropdownItem id="is" onClick = {()=> RunModel('is')}>IS</DropdownItem>
          <DropdownItem id="ls" onClick = {()=> RunModel('ls')}>LS</DropdownItem>
          <DropdownItem id="rc" onClick = {()=> RunModel('rc')}>RC </DropdownItem>
          <DropdownItem id="nx" onClick = {()=> RunModel('nx')}>NX</DropdownItem>
          <DropdownItem id="rx" onClick = {()=> RunModel('rx')}>RX</DropdownItem>
          <DropdownItem id="ux" onClick = {()=> RunModel('ux')}>UX</DropdownItem>
          <DropdownItem id="gx" onClick = {()=> RunModel('gx')}>GX</DropdownItem>
          <DropdownItem id="ls" onClick = {()=> RunModel('lx')}>LX</DropdownItem>
          <DropdownItem id="lm" onClick = {()=> RunModel('lm')}>LM</DropdownItem>
    
         <Dropdown.Divider/>
         <Dropdown.Item>NISSAN</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="sentra" onClick = {()=> RunModel('sentra')}>SENTRA</Dropdown.Item>
         <Dropdown.Item id="altima" onClick = {()=> RunModel('altima')}>ALTIMA</Dropdown.Item>
         <Dropdown.Item id="maxima" onClick = {()=> RunModel('maxima')}>MAXIMA</Dropdown.Item>
         <Dropdown.Item id="pathfinder" onClick = {()=> RunModel('pathfinder')}>PATHFINDER</Dropdown.Item>
         <Dropdown.Item id="rogue" onClick = {()=> RunModel('rogue')}>ROGUE</Dropdown.Item>
         <Dropdown.Item id="murano" onClick = {()=> RunModel('murano')}>MURANO</Dropdown.Item>
         <Dropdown.Item id="xterra" onClick = {()=> RunModel('xterra')}>XTERRA</Dropdown.Item>
         <Dropdown.Item id="leaf" onClick = {()=> RunModel('leaf')}>LEAF</Dropdown.Item>
         <Dropdown.Item id="titan" onClick = {()=> RunModel('titan')}>TITAN</Dropdown.Item>
         <Dropdown.Item id="juke" onClick = {()=> RunModel('juke')}>JUKE </Dropdown.Item>
         <Dropdown.Item id="patrol" onClick = {()=> RunModel('patrol')}>PATROL</Dropdown.Item>
         <Dropdown.Item id="armada" onClick = {()=> RunModel('armada')}>ARMADA</Dropdown.Item>
         <Dropdown.Item id="frontier" onClick = {()=> RunModel('frontier')}>FRONTIER</Dropdown.Item>
         <Dropdown.Item id="nv" onClick = {()=> RunModel('nv')}>NV</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>MAZDA</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="mazda2" onClick = {()=> RunModel('mazda2')}>MAZDA2</Dropdown.Item>
         <Dropdown.Item id="mazda3" onClick = {()=> RunModel('mazda3')}>MAZDA3</Dropdown.Item>
         <Dropdown.Item id="mazda6" onClick = {()=> RunModel('mazda6')}>MAZDA6</Dropdown.Item>
         <Dropdown.Item id="cx-3" onClick = {()=> RunModel('cx-3')}>CX-3</Dropdown.Item>
         <Dropdown.Item id="cx-30" onClick = {()=> RunModel('cx-30')}>CX-30</Dropdown.Item>
         <Dropdown.Item id="cx-40" onClick = {()=> RunModel('cx-40')}>CX-40</Dropdown.Item>
         <Dropdown.Item id="cx-4" onClick = {()=> RunModel('cx-4')}>CX-4</Dropdown.Item>
         <Dropdown.Item id="cx-5" onClick = {()=> RunModel('cx-5')}>CX-5</Dropdown.Item>
         <Dropdown.Item id="cx-8" onClick = {()=> RunModel('cx-8')}>CX-8</Dropdown.Item>
         <Dropdown.Item id="cx-9" onClick={()=> RunModel('cx-9')}>CX-9</Dropdown.Item>
   
         <Dropdown.Divider/>
         <Dropdown.Item>PONTIAC</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>G3</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>G5</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>G8</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>GRAND PRIX</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>TORRENT</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>SOLSTICE</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>G6</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>TRANS SPORT</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>FIERO</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>SUNFIRE</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>MONTANA</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>AZTEK</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>VIBE</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>
         <Dropdown.Item id="cl" onClick = {()=> RunModel('cl')}>CL</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>SUBARU</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="impreza" onClick = {()=> RunModel('impreza')}>IMPREZA</Dropdown.Item>
         <Dropdown.Item id="legacy" onClick = {()=> RunModel('legacy')}>LEGACY</Dropdown.Item>
         <Dropdown.Item id="levorg" onClick = {()=> RunModel('levorg')}>LEVORG</Dropdown.Item>
         <Dropdown.Item id="wrx" onClick = {()=> RunModel('wrx')}>WRX</Dropdown.Item>
         <Dropdown.Item id="ascent" onClick = {()=> RunModel('ascent')}>ASCENT</Dropdown.Item>
         <Dropdown.Item id="forester" onClick = {()=> RunModel('forester')}>FORESTER</Dropdown.Item>
         <Dropdown.Item id="outback" onClick = {()=> RunModel('outback')}>OUTBACK</Dropdown.Item>

         <Dropdown.Divider/>
         <Dropdown.Item>TOYOTA</Dropdown.Item>
         <Dropdown.Divider />
          <DropdownItem id="avalon" onClick = {()=> RunModel('avalon')}>AVALON</DropdownItem>
          <DropdownItem id="camry" onClick = {()=> RunModel('camry')}>CAMRY</DropdownItem>
          <DropdownItem id="corolla" onClick = {()=> RunModel('corolla')}>COROLLA</DropdownItem>
          <DropdownItem id="highlander" onClick = {()=> RunModel('highlander')}>HIGHLANDER</DropdownItem>
          <DropdownItem id="4runner" onClick = {()=> RunModel('4runner')}>4RUNNER</DropdownItem>
          <DropdownItem id="rav4" onClick = {()=> RunModel('rav4')}>RAV4</DropdownItem>
          <DropdownItem id="tacoma" onClick = {()=> RunModel('tacoma')}>TACOMA</DropdownItem>
          <DropdownItem id="tundra" onClick = {()=> RunModel('tundra')}>TUNDRA</DropdownItem>

         <Dropdown.Divider/>
         <Dropdown.Item>VOLVO</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="940/960" onClick = {()=> RunModel('940/960')}>940/960</Dropdown.Item>
         <Dropdown.Item id="850" onClick = {()=> RunModel('850')}>850</Dropdown.Item>
         <Dropdown.Item id="S40/V40" onClick = {()=> RunModel('S40/V40')}>S40/V40</Dropdown.Item>
         <Dropdown.Item id="S70/V70" onClick = {()=> RunModel('S70/V70')}>S70/V70</Dropdown.Item>
         <Dropdown.Item id="S90/V90" onClick = {()=> RunModel('S90/V90')}>S90/V90</Dropdown.Item>
         <Dropdown.Item id="C70" onClick = {()=> RunModel('C70')}>C70</Dropdown.Item>
         <Dropdown.Item id="S80" onClick = {()=> RunModel('S80')}>S80</Dropdown.Item>
         <Dropdown.Item id="S60" onClick = {()=> RunModel('S60')}>S60</Dropdown.Item>
         <Dropdown.Item id="V70/XC70" onClick = {()=> RunModel('V70/XC70')}>V70/XC70</Dropdown.Item>
         <Dropdown.Item id="XC90" onClick = {()=> RunModel('XC90')}>XC90</Dropdown.Item>
         <Dropdown.Item id="S40V40" onClick = {()=> RunModel('S40/V40')}>S40/V40</Dropdown.Item>
         <Dropdown.Item id="c40" onClick = {()=> RunModel('c40')}>C40</Dropdown.Item>
         <Dropdown.Item id="c30" onClick = {()=> RunModel('c30')}>C30</Dropdown.Item>
         <Dropdown.Item id="c70" onClick = {()=> RunModel('c70')}>C70</Dropdown.Item>
         <Dropdown.Item id="s80" onClick = {()=> RunModel('S80')}>S80</Dropdown.Item>
         <Dropdown.Item id="v70/xc70" onClick = {()=> RunModel('v70/xc70')}>V70/XC70</Dropdown.Item>
         <Dropdown.Item id="xc60" onClick = {()=> RunModel('xc60')}>XC60</Dropdown.Item>
         <Dropdown.Item id="s60/v60" onClick = {()=> RunModel('s60/v60')}>S60/V60</Dropdown.Item>
         <Dropdown.Item id="v40" onClick = {()=> RunModel('v40')}>V40</Dropdown.Item>
         <Dropdown.Item id="xcclassic" onClick = {()=> RunModel('xcclassic')}>XC CLASSIC</Dropdown.Item>
         <Dropdown.Item id="xc60" onClick = {()=> RunModel('xc60')}>XC60</Dropdown.Item>
         <Dropdown.Item id="xc40" onClick = {()=> RunModel('xc40')}>XC40</Dropdown.Item>
         <Dropdown.Item id="xc90" onClick = {()=> RunModel('xc90')}>XC90</Dropdown.Item>
         <Dropdown.Item id="s90/v90" onClick = {()=> RunModel('s90/v90')}>S90/V90</Dropdown.Item>



         <Dropdown.Divider/>
         <Dropdown.Item>VOLKSWAGEN</Dropdown.Item>
         <Dropdown.Divider/>
         <Dropdown.Item id="beetle" onClick = {()=> RunModel('bettle')}>BEETLE</Dropdown.Item>
         <Dropdown.Item id="golf" onClick = {()=> RunModel('golf')}>GOLF</Dropdown.Item>
         <Dropdown.Item id="jetta" onClick = {()=> RunModel('jetta')}>JETTA</Dropdown.Item>
         <Dropdown.Item id="passat" onClick = {()=> RunModel('passat')}>PASSAT</Dropdown.Item>
         <Dropdown.Item id="tiguan" onClick = {()=> RunModel('tiguan')}>TIGUAN</Dropdown.Item>
         <Dropdown.Item id="touareg" onClick = {()=> RunModel('touareg')}>TOUAREG</Dropdown.Item>
         <Dropdown.Item id="touran" onClick = {()=> RunModel('touran')}>TOURAN</Dropdown.Item>
         <Dropdown.Item id="sharan" onClick = {()=> RunModel('shran')}>SHARAN</Dropdown.Item>
 

       </DropdownButton>

    )
}


export default Model

