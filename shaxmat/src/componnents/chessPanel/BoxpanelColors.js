import React from 'react';
import {useMessage} from '../hook/useMessage';

import { movePiece } from '../validation/validationPiece';
import { changeFish } from '../validation/validationPiece';

import Draggable from "react-draggable";
import { ColorBox } from '../styles/BoxPiece';

import * as actionTypes from "../../store/action/actionsTypes";
import { useDispatch,useSelector } from 'react-redux';

import { MessagePopUp } from "../popUp/MessagePopUp";



const white = ['q', 'k', 'b', 'n', 'r', 'p']
const black = [ 'Q', 'K', 'B', 'N', 'R','P']

function BoxpanelColors({item,index,data,showMove,mousOver}) {
    
    
    
    const dispatch = useDispatch()
    
    const {whitePiece,blackPiece} =useSelector(state =>state)
  
    const {setMessage,getMessage} = useMessage()
   
   

    const handleStop = (event,ui)=>{
    
        const startKey = +ui.node.id.substring(1)
        const endKey = +event.target.id.substring(1)
 
        if(white.includes(data[startKey]) && !whitePiece){
          setMessage('wait, not your move')
          return
        }
        if(black.includes(data[startKey]) && !blackPiece){
          setMessage('wait, not your move')
          return
        }

        const {nextPiece,state} = changeFish(data,startKey,endKey)
          dispatch({
            type: actionTypes.CHANGE_EVENT_FISH,
           payload:state,
           nextPiece
          })
    }       

   
   

  return (
    <ColorBox 
    bg={(index % 2 + Math.floor(index / 8)) % 2 === 0  ? '#F0D9B5': '#B59963'}
    move={showMove.includes(index)}
    key={index} 
    id={'f'+index} 
    onMouseOver={mousOver}>
    <Draggable      
      onStop={handleStop}
      position={'relative'}  
    >
      {movePiece(item,index)}              
    </Draggable>
    <MessagePopUp getMessage={getMessage}/>
  </ColorBox>
  );
}

export default BoxpanelColors;
