import { createSlice } from '@reduxjs/toolkit'



export const yearSlice = createSlice({
  name: 'year',
  initialState: {
    value: ""
  },
  reducers: {

    resetYear: (state) => {
      state.value = ""

    },
    changeText: state => { 
        //  let text = "Original State Changed"
        //  let we = true;
        //  let blah = false;
         let trueText = document.getElementById('dropdownyear')
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
export const { changeText, resetYear } = yearSlice.actions

export default yearSlice.reducer