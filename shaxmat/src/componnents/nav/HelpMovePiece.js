import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HelpMove,Checked } from '../styles/Nav.style';
import * as actionTypes from '../../store/action/actionsTypes';


export default function HelpMovePiece() {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    
    const handleDrag =()=>{
       
        dispatch({
            type: actionTypes.HELP_MOVE_PIECE_ON_OR_OFF
        })
    }
  return (
    <HelpMove >
        <Checked jsc={state.isHelp ? 'flex-end': 'flex-start'} onClick={handleDrag}>
            <div></div>
        </Checked>       
    </HelpMove>
  );
}
