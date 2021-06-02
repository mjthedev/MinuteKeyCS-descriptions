import React from 'react';






export function RunModel(x) {
  
    let [model, setModel] = React.useState('')
    let modeltitle = document.getElementById('dropdownmodel')
    let carModel = document.getElementById(`${x}`)
    modeltitle.innerText = carModel.innerText
    let modelText = modeltitle.innerText

    
    console.log(modelText)
    console.log(model)
    setModel(modelText)

  }

