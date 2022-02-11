import React from 'react';
import { Message } from '../styles/Notivication.Style';

export const ErrorMessage = ({msg}) => {
  return( 
  <Message msg={msg}>
     {msg}
  </Message>
  );
};
