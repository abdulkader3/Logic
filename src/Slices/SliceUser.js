import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    getUserData:null ,
    // getUserData: JSON.parse(localStorage.getItem('prodact'))?JSON.parse(localStorage.getItem('prodact')):null ,
  },
  reducers: {
    ProdactSlice: (state , action)=>{
      state.getUserData = action.payload
    }
   
  },
})

export const { ProdactSlice } = counterSlice.actions

export default counterSlice.reducer
