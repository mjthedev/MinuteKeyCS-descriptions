import React from 'react';
import ReactDom from 'react-dom';
import {DropdownButton, Dropdown} from "react-bootstrap";
import {RunYear} from '../functions/runYear';
import { createStore } from 'redux';


import { useSelector, useDispatch } from 'react-redux'
import { changeText } from '../../app/features/year/year'




// export let samestore = createStore(theReducer);

// export let stateofstore = samestore.getState();





const Year = ()=> {
    const theYear = useSelector(state => state.year.value)
    const dispatch = useDispatch()
    
    let RunMeYear = (x) => {
        RunYear(x)
        dispatch(changeText())
    
    }
    const [year, setYear] = React.useState('')
    
    return (
        
        
        <DropdownButton variant='success' id="dropdownyear" title="Year"
        >
                      <Dropdown.Item id="year2021" onClick={() => {RunMeYear('year2021')}
                        //   {RunYear('year2021')}
               
            // samestore.dispatch({type: 'updatetest3'})
            // let title = document.getElementById('dropdowntitle')
            // let carYear = document.getElementById(`year2021`)
            // title.innerHTML = carYear.innerHTML
           
         //    let yearText = title.innerHTML
         //    console.log(samestore.getState())
            
             
             // console.log(yearText)
             // setYear(yearText)
             // console.log(year)
             // console.log(navigator)

                    
                    } >2021</Dropdown.Item>
                      <Dropdown.Item id="year2020" onClick={() => {RunMeYear('year2020')}}>2020</Dropdown.Item>
                      <Dropdown.Item id="year2019" onClick={() => {RunYear('year2019')}}>2019</Dropdown.Item>
                      <Dropdown.Item id="year2018" onClick={() => {RunMeYear('year2018')}}>2018</Dropdown.Item>
                      <Dropdown.Item id="year2017" onClick={() => {RunMeYear('year2017')}}>2017</Dropdown.Item>
                      <Dropdown.Item id="year2016" onClick={() => {RunMeYear('year2016')}}>2016</Dropdown.Item>
                      <Dropdown.Item id="year2015" onClick={() => {RunMeYear('year2015')}}>2015</Dropdown.Item>
                      <Dropdown.Item id="year2014" onClick={() => {RunMeYear('year2014')}}>2014</Dropdown.Item>
                      <Dropdown.Item id="year2013" onClick={() => {RunMeYear('year2013')}}>2013</Dropdown.Item>
                      <Dropdown.Item id="year2012" onClick={() => {RunMeYear('year2012')}}>2013</Dropdown.Item>
                      <Dropdown.Item id="year2011" onClick={() => {RunMeYear('year2011')}}>2012</Dropdown.Item>
                      <Dropdown.Item id="year2010" onClick={() => {RunMeYear('year2010')}}>2011</Dropdown.Item>
                      <Dropdown.Item id="year2009" onClick={() => {RunMeYear('year2009')}}>2010</Dropdown.Item>
                      <Dropdown.Item id="year2008" onClick={() => {RunMeYear('year2008')}}>2009</Dropdown.Item>
                      <Dropdown.Item id="year2007" onClick={() => {RunMeYear('year2007')}}>2008</Dropdown.Item>
                      <Dropdown.Item id="year2006" onClick={() => {RunMeYear('year2006')}}>2006</Dropdown.Item>
                      <Dropdown.Item id="year2005" onClick={() => {RunMeYear('year2005')}}>2005</Dropdown.Item>
                      <Dropdown.Item id="year2004" onClick={() => {RunMeYear('year2004')}}>2004</Dropdown.Item>
                      <Dropdown.Item id="year2003" onClick={() => {RunMeYear('year2003')}}>2003</Dropdown.Item>
                      <Dropdown.Item id="year2004" onClick={() => {RunMeYear('year2002')}}>2002</Dropdown.Item>
                      <Dropdown.Item id="year2001" onClick={() => {RunMeYear('year2001')}}>2002</Dropdown.Item>
                      <Dropdown.Item id="year2000" onClick={() => {RunMeYear('year2000')}}>2001</Dropdown.Item>
                      <Dropdown.Item id="year1999" onClick={() => {RunMeYear('year1999')}}>2000</Dropdown.Item>
                      <Dropdown.Item id="year1998" onClick={() => {RunMeYear('year1998')}}>1999</Dropdown.Item>
                      <Dropdown.Item id="year1997" onClick={() => {RunMeYear('year1997')}}>1998</Dropdown.Item>
                      <Dropdown.Item id="year1996" onClick={() => {RunMeYear('year1996')}}>1997</Dropdown.Item>
                      <Dropdown.Item id="year1995" onClick={() => {RunMeYear('year1995')}}>1996</Dropdown.Item>
                      <Dropdown.Item id="year1994" onClick={() => {RunMeYear('year1994')}}>1995</Dropdown.Item>
                      <Dropdown.Item id="year1993" onClick={() => {RunMeYear('year1993')}}>1994</Dropdown.Item>
                      <Dropdown.Item id="year1992" onClick={() => {RunMeYear('year1992')}}>1993</Dropdown.Item>
                      <Dropdown.Item id="year1991" onClick={() => {RunMeYear('year1991')}}>1992</Dropdown.Item>
                      <Dropdown.Item id="year1990" onClick={() => {RunMeYear('year1990')}}>1990</Dropdown.Item>
                      <Dropdown.Item id="year1989" onClick={() => {RunMeYear('year1989')}}>1989</Dropdown.Item>
                      <Dropdown.Item id="year1988" onClick={() => {RunMeYear('year1988')}}>1988</Dropdown.Item>
                      <Dropdown.Item id="year1987" onClick={() => {RunMeYear('year1987')}}>1987</Dropdown.Item>
                      <Dropdown.Item id="year1986" onClick={() => {RunMeYear('year1986')}}>1986</Dropdown.Item>
                      <Dropdown.Item id="year1985" onClick={() => {RunMeYear('year1985')}}>1985</Dropdown.Item>
                      <Dropdown.Item id="year1984" onClick={() => {RunMeYear('year1984')}}>1984</Dropdown.Item>
                      <Dropdown.Item id="year1983" onClick={() => {RunMeYear('year1983')}}>1983</Dropdown.Item>
                      <Dropdown.Item id="year1982" onClick={() => {RunMeYear('year1982')}}>1982</Dropdown.Item>
                      <Dropdown.Item id="year1981" onClick={() => {RunMeYear('year1981')}}>1981</Dropdown.Item>
                      <Dropdown.Item id="year1980" onClick={() => {RunMeYear('year1980')}}>1980</Dropdown.Item>
                      <Dropdown.Item id="year1979" onClick={() => {RunMeYear('year1979')}}>1979</Dropdown.Item>
                      <Dropdown.Item id="year1978" onClick={() => {RunMeYear('year1978')}}>1978</Dropdown.Item>
                      <Dropdown.Item id="year1977" onClick={() => {RunMeYear('year1977')}}>1977</Dropdown.Item>
                      <Dropdown.Item id="year1976" onClick={() => {RunMeYear('year1976')}}>1976</Dropdown.Item>
                      <Dropdown.Item id="year1975" onClick={() => {RunMeYear('year1975')}}>1975</Dropdown.Item>
                  
                </DropdownButton>
    )
}


export default Year;
