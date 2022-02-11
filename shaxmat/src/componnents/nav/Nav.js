import React from 'react';
import { Nav } from '../styles/Nav.style';
import HelpMovePiece from './HelpMovePiece';
import Logaut from './Logout';
import UserName from './UserName';

export default function NavMenu() {
  return (
  <Nav>
    <ul>
        <HelpMovePiece/>
        <UserName/>
        <Logaut/>
        
    </ul>
  </Nav>
  )
}
