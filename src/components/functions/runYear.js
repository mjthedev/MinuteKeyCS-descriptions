// import React from 'react';
// import { createStore } from 'redux';
// import {theReducer as we} from '../descriptions/auto/autoKey';
// import {year} from '../descriptions/auto/autoKey';


// import { useSelector, useDispatch } from 'react-redux'
// import { changeText } from '../../app/features/year/year'





// let title = document.getElementById('dropdowntitle').innerHTML
    




// export function theReducer(state = { year: 'Orignial State' }, action) {
  
//   // let title = 'this is title'
//   // let test2 = 'the text in the DOM2';
//   // let test3 = 'the text in the DOM3';
//   // let test4 = 'the text in the DOM4';
//    switch (action.type) {
//      case 'updatetest1':
//        return { year: state.year = title}
//        case 'updatetest2':
//        return { year: state.year = test2 }
//        case 'updatetest3':
//        return { year: state.year = test3 }
//        case 'updatetest4':
//        return { year: state.year = test4 }
//      default:
//        return state
//    }
//   }
  

  // let samestore = createStore(theReducer)


  // export let store = createStore(theReducer)
  
  // store.subscribe(() => console.log(store.getState()))
  

  
  export let RunYear = (x) => {
    // const theYear = useSelector(state => state.year.value)
    // let dispatch = useDispatch()
    // samestore.dispatch({type: 'updatetest3'})
    let title = document.getElementById('dropdownyear')
    let carYear = document.getElementById(`${x}`)
    title.innerHTML = carYear.innerHTML
    // dispatch(changeText())
     //    let yearText = title.innerHTML
     //    console.log(samestore.getState())
        
         
         // console.log(yearText)
         // setYear(yearText)
         // console.log(year)
         // console.log(navigator)

}




// samestore.subscribe();
// const {year, setYear} = React.useState('')
// let title = document.getElementById('dropdowntitle').innerText
// let carYear = document.getElementById(`${x}`).innerText
// title.innerHTML = carYear.innerHTML
// samestore.dispatch({ type: 'updatetest1' })
// console.log(yearText)
// setYear(yearText)
// console.log(year)
// console.log(navigator)
