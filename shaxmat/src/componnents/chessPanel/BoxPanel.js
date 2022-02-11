import React, { useEffect, useState,useRef,useCallback } from 'react';
import { useSelector } from 'react-redux';

import BoxpanelColors from './BoxpanelColors';
import {moveHintChessPiece} from '../possibleMoves/piece';
import {io} from "socket.io-client"


export default function BoxPanel() {
  const [data,setData] = useState([])
  const state =  useSelector(state =>state)
  const [showMove,setShowMove] = useState([])
  const socket = useRef()
  const userId = useRef(JSON.parse(localStorage.getItem('userAuth')) )
  

  const mousOver =(e)=>{
    if(state.isHelp){
      let id = +e.target.id.substring(1)
      setShowMove(moveHintChessPiece (data[id],id ,data))
    }
   
 }



 useEffect(()=>{
  socket.current = io('http://localhost:8900', { transports : ['websocket'] })
  },[socket])

 const addUser = useCallback(()=>{
   socket?.current?.emit("addUser",userId.current.userId,state.firstName,state.lastName)
   socket?.current?.on('getUsers',users=> console.log(users))
 },[socket,state])

 

 useEffect(()=>{
  addUser()
 },[addUser,state,socket])
 
  useEffect(()=>{
    setData(state.piece)
  },[state])

  return (
  <div className='border-box'>
      {data && data.map((item,index)=>(
          <BoxpanelColors 
          item={item} 
          index={index} 
          data={data}
          mousOver={mousOver} 
          showMove={showMove} 
          key={index}
          />
      ))}
  </div>
  );
}