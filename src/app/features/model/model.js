import { createSlice } from '@reduxjs/toolkit'



export const modelSlice = createSlice({
  name: 'model',
  initialState: {
    value: ""
  },
  reducers: {
    resetModel: state => {
      state.value = ""

    },
    changeText: state => { 
        //  let text = "Original State Changed"
        //  let we = true;
        //  let blah = false;
         let trueText = document.getElementById('dropdownmodel')
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if(true) {
        state.value = trueText.innerText; 
      } else  state.value = "nothing changed"; 
    },

  }
})


// Action creators are generated for each case reducer function
export const { changeText, resetModel} = modelSlice.actions

export default modelSlice.reducer