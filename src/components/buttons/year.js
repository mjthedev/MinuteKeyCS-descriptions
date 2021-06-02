import React from 'react';
import ReactDom from 'react-dom';
import {DropdownButton, Dropdown} from "react-bootstrap"
import {RunYear} from '../functions/runYear'





const Year = ()=> {



    return (

        
        <DropdownButton variant='success' id="dropdowntitle" title="Year"
        >
                      <Dropdown.Item id="year2021" onClick={() => {RunYear('year2021')}} >2021</Dropdown.Item>
                      <Dropdown.Item id="year2020" onClick={() => {RunYear('year2020')}}>2020</Dropdown.Item>
                      <Dropdown.Item id="year2019" onClick={() => {RunYear('year2019')}}>2019</Dropdown.Item>
                      <Dropdown.Item id="year2018" onClick={() => {RunYear('year2018')}}>2018</Dropdown.Item>
                      <Dropdown.Item id="year2017" onClick={() => {RunYear('year2017')}}>2017</Dropdown.Item>
                      <Dropdown.Item id="year2016" onClick={() => {RunYear('year2016')}}>2016</Dropdown.Item>
                      <Dropdown.Item id="year2015" onClick={() => {RunYear('year2015')}}>2015</Dropdown.Item>
                      <Dropdown.Item id="year2014" onClick={() => {RunYear('year2014')}}>2014</Dropdown.Item>
                      <Dropdown.Item id="year2013" onClick={() => {RunYear('year2013')}}>2013</Dropdown.Item>
                      <Dropdown.Item id="year2012" onClick={() => {RunYear('year2012')}}>2013</Dropdown.Item>
                      <Dropdown.Item id="year2011" onClick={() => {RunYear('year2011')}}>2012</Dropdown.Item>
                      <Dropdown.Item id="year2010" onClick={() => {RunYear('year2010')}}>2011</Dropdown.Item>
                      <Dropdown.Item id="year2009" onClick={() => {RunYear('year2009')}}>2010</Dropdown.Item>
                      <Dropdown.Item id="year2008" onClick={() => {RunYear('year2008')}}>2009</Dropdown.Item>
                      <Dropdown.Item id="year2007" onClick={() => {RunYear('year2007')}}>2008</Dropdown.Item>
                      <Dropdown.Item id="year2006" onClick={() => {RunYear('year2006')}}>2006</Dropdown.Item>
                      <Dropdown.Item id="year2005" onClick={() => {RunYear('year2005')}}>2005</Dropdown.Item>
                      <Dropdown.Item id="year2004" onClick={() => {RunYear('year2004')}}>2004</Dropdown.Item>
                      <Dropdown.Item id="year2003" onClick={() => {RunYear('year2003')}}>2003</Dropdown.Item>
                      <Dropdown.Item id="year2004" onClick={() => {RunYear('year2002')}}>2002</Dropdown.Item>
                      <Dropdown.Item id="year2001" onClick={() => {RunYear('year2001')}}>2002</Dropdown.Item>
                      <Dropdown.Item id="year2000" onClick={() => {RunYear('year2000')}}>2001</Dropdown.Item>
                      <Dropdown.Item id="year1999" onClick={() => {RunYear('year1999')}}>2000</Dropdown.Item>
                      <Dropdown.Item id="year1998" onClick={() => {RunYear('year1998')}}>1999</Dropdown.Item>
                      <Dropdown.Item id="year1997" onClick={() => {RunYear('year1997')}}>1998</Dropdown.Item>
                      <Dropdown.Item id="year1996" onClick={() => {RunYear('year1996')}}>1997</Dropdown.Item>
                      <Dropdown.Item id="year1995" onClick={() => {RunYear('year1995')}}>1996</Dropdown.Item>
                      <Dropdown.Item id="year1994" onClick={() => {RunYear('year1994')}}>1995</Dropdown.Item>
                      <Dropdown.Item id="year1993" onClick={() => {RunYear('year1993')}}>1994</Dropdown.Item>
                      <Dropdown.Item id="year1992" onClick={() => {RunYear('year1992')}}>1993</Dropdown.Item>
                      <Dropdown.Item id="year1991" onClick={() => {RunYear('year1991')}}>1992</Dropdown.Item>
                      <Dropdown.Item id="year1990" onClick={() => {RunYear('year1990')}}>1990</Dropdown.Item>
                      <Dropdown.Item id="year1989" onClick={() => {RunYear('year1989')}}>1989</Dropdown.Item>
                      <Dropdown.Item id="year1988" onClick={() => {RunYear('year1988')}}>1988</Dropdown.Item>
                      <Dropdown.Item id="year1987" onClick={() => {RunYear('year1987')}}>1987</Dropdown.Item>
                      <Dropdown.Item id="year1986" onClick={() => {RunYear('year1986')}}>1986</Dropdown.Item>
                      <Dropdown.Item id="year1985" onClick={() => {RunYear('year1985')}}>1985</Dropdown.Item>
                      <Dropdown.Item id="year1984" onClick={() => {RunYear('year1984')}}>1984</Dropdown.Item>
                      <Dropdown.Item id="year1983" onClick={() => {RunYear('year1983')}}>1983</Dropdown.Item>
                      <Dropdown.Item id="year1982" onClick={() => {RunYear('year1982')}}>1982</Dropdown.Item>
                      <Dropdown.Item id="year1981" onClick={() => {RunYear('year1981')}}>1981</Dropdown.Item>
                      <Dropdown.Item id="year1980" onClick={() => {RunYear('year1980')}}>1980</Dropdown.Item>
                      <Dropdown.Item id="year1979" onClick={() => {RunYear('year1979')}}>1979</Dropdown.Item>
                      <Dropdown.Item id="year1978" onClick={() => {RunYear('year1978')}}>1978</Dropdown.Item>
                      <Dropdown.Item id="year1977" onClick={() => {RunYear('year1977')}}>1977</Dropdown.Item>
                      <Dropdown.Item id="year1976" onClick={() => {RunYear('year1976')}}>1976</Dropdown.Item>
                      <Dropdown.Item id="year1975" onClick={() => {RunYear('year1975')}}>1975</Dropdown.Item>
                  
                </DropdownButton>
    )
}


export default Year;
