import { createSlice } from '@reduxjs/toolkit'

const dataReducer = createSlice({
  name: 'data',
  initialState: [],
  reducers: {
    addData(state, action) {
      state.push(action.payload)
    },
    removeData(state, action) {
      if(action?.payload){
        const removeIndex = state.findIndex(action.payload)
        state.slice(removeIndex,1)
      }else{
        state.pop()
      }      
    }
  }
})

export const { addData, removeData } = dataReducer.actions
export default dataReducer.reducer