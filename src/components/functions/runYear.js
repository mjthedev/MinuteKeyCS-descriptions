import React from 'react';








export function RunYear(x) {
  
    let [year, setYear] = React.useState('')
    let title = document.getElementById('dropdowntitle')
    let carYear = document.getElementById(`${x}`)
    title.innerHTML = carYear.innerHTML
    let yearText = title.innerHTML
    console.log(yearText)
  
    setYear(yearText)
    console.log(year)
    console.log(navigator)
    
  }
  
