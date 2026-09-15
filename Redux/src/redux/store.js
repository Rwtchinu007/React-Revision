import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/CounterSlice'
//store config kro and fir jo reducer export kiya hai usko reducer me daal do

export const store = configureStore({
    reducer:{
        count:counterReducer
    }
})