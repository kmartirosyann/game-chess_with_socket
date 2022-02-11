import React from 'react';
import { useAuth } from '../auth/authHook';
import { LogoutTeg } from '../styles/Logout.style';



export default  function Logaut() {
  const {logout} = useAuth()
  const handleLogaut =  ()=>{
   logout()
  }

  return (
      <LogoutTeg onClick={handleLogaut}>
          Logout
      </LogoutTeg>
  )
}
