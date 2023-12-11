import { configureStore } from '@reduxjs/toolkit'
import dataReducer from '../reducers/dataReducer'
import globalReducer from '../reducers/globalReducer'
export const store = configureStore({
  reducer: {
    dataList:dataReducer,
    globalState:globalReducer
  }
})