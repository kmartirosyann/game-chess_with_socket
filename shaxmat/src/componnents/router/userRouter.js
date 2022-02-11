import React from 'react';
import {Routes ,Route , Navigate } from 'react-router-dom'
import { Users } from '../allUsers/Users';
import { AuthFormRegistr } from '../auth/AuthFormRegistr';
import { Login } from '../auth/Login';

import ChessPanel from '../chessPanel/ChessPanel';
import NavMenu from '../nav/Nav';
import { RegistrNav } from '../nav/RegistrNav';



export const userRouter = (isAutorizatrion) => {


if(isAutorizatrion){

  return ( 
    <div>
      <RegistrNav/>
      <Routes>
          <Route path='/register' element={ <AuthFormRegistr />} />
          <Route path='/Login' element={ <Login />} />
          <Route path="*" element={<Navigate to ="/register" />}/>
      </Routes>  
    </div>  
  )  
  }else return (
  <div>
    <NavMenu/>
    <div className='App'>
        <Users/>
        <div className="App">       
          <Routes>
                <Route path='/' element={<ChessPanel/>}/>
                <Route path="*" element={<Navigate to ="/" />}/>     
          </Routes>        
        </div>
    </div>
  </div> 
  )
};
