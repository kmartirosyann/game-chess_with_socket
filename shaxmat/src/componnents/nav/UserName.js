import React from 'react';
import { useSelector } from 'react-redux';
import {Avatar} from '../styles/Nav.style'

export default function UserName() {
  const state = useSelector(state=>state)
console.log(state.firstName[0],state.firstName)
  return( 
   <Avatar>
  <p>{state.firstName[0] + state.lastName[0]}</p>  
  </Avatar>
  );
}
