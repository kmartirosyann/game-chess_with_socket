import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as actionTypes from '../../store/action/actionsTypes'


const userName = 'userAuth'

export const useAuth = () => {
  const [token,setToken] = useState(null)
  const [userId,setUserId] = useState(null)
  const dispatch = useDispatch()

  const login = useCallback((jwt,id)=>{
    setToken(jwt)
    setUserId(id)
    localStorage.setItem(userName,JSON.stringify({token:jwt,userId:id}))    
  },[])

 const logout = useCallback(()=>{
    setToken(null)
    setUserId(null)
    localStorage.removeItem(userName)
    dispatch({
      type:actionTypes.USER_AUTH_LOGAUT,
      payload: token,
  })
 
 },[dispatch,token])

 

 useEffect(()=>{
     const data = localStorage.getItem(userName)
     if(data){
      dispatch({
        type:actionTypes.ADD_OR_DELETE_TOKEN,
        token: data
      })
     }
     
 })


  return {login,logout,token,userId}
};
