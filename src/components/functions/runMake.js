import React from 'react';





 



export function RunMake(x) {

  
    
    
    let [make, setMake] = React.useState('')
    let maketitle = document.getElementById('dropdownmake')
    let carMake = document.getElementById(`${x}`)
    maketitle.innerText = carMake.innerText;
    let makeText = maketitle.innerText;

    

    setMake(makeText)
    console.log(make)

}



