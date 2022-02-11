import React from 'react';
import { Nav } from '../styles/Nav.style';
import {NavLink} from 'react-router-dom'

export const RegistrNav = () => {
  return (
      <Nav>
          <ul>
            <li>
                <NavLink to={'/register'}> registr</NavLink>
            </li> 
            <li>
                <NavLink to={'/login'}> login </NavLink>
            </li>
             
          </ul>
          
      </Nav>
  );
};
