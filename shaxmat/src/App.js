import {BrowserRouter as Router } from 'react-router-dom'
import { userRouter } from './componnents/router/userRouter';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './App.css';



function App() {
 const [isAutorizatrion,setisAutorizatrion] = useState(null)
 const token = useSelector(state=>state.token)
 const router = userRouter(!isAutorizatrion)

useEffect(()=>{  
  setisAutorizatrion(!!token)    
},[setisAutorizatrion,token])

  return (
    <Router>
      {router}     
    </Router>
   
  );
}

export default App;
