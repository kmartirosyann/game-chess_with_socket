import React from 'react';
import BoxPanel from './BoxPanel';
import LeterPanel from './LeterPanel';
import NumberPanel from './NumberPanel';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as acitonTypes from '../../store/action/actionsTypes'
import { useHttp } from '../hook/http.hook';

export default function ChessPanel() {

  const {request} = useHttp()
  const userId = useRef(JSON.parse(localStorage.getItem('userAuth')) )
  const dispatch = useDispatch()

  const hasData = useCallback(async()=>{
    let id = JSON.stringify(userId?.current.userId)

    try{
      const data=  await request(`/api/auth/${id}`,'GET')
      
          dispatch({
            type:acitonTypes.USER_AUTH_LOGIN,
            firstName: data.firstName,
            lastName : data.lastName,
            userId : data.userId
          })
    }catch(e){
      console.log(e)
    }
  
  },[dispatch,request])
  
  useEffect(()=>{
    hasData()
  },[hasData])
  return (
    <div>
      <div>

      </div>
      <div className='container'>
          <LeterPanel/>
          <div className='numberPanel'>
            <NumberPanel/>
              <div>
                <BoxPanel/>
              </div>
              <NumberPanel/>
          </div>
            
          <LeterPanel/>
      </div>
  </div>
  );
}
