import {useSelector,useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchUserData } from "../redux/slice/userSlice";

export const useUser = () =>{
    // useSelector is used to get the user state from the Redux store. 
const {data,loading,error} = useSelector(state=>state.user)
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(fetchUserData())
},[dispatch])

return {data,loading,error}
}