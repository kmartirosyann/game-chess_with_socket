import React, {  useState } from 'react';
import { useHttp } from '../hook/http.hook';
import { useErrorMsg } from '../hook/useErrorMsg';
import { useDispatch } from "react-redux";
import * as acitonTypes from "../../store/action/actionsTypes"


import {FormsInput,Forms,FormBox,TextTitle,ErrorMsg,Button,PositionButtonLeft} from '../styles/FormsInput'
import { useAuth } from './authHook';
import { ErrorMessage } from '../popUp/ErrorMessage';

export const Login = () => {
   
     const {errMsg,notificationErr} = useErrorMsg()
    const {request,loading,error} = useHttp()
    const {login}= useAuth()
     const dispatch = useDispatch()

    const [form,setForm] = useState({
        email:'',
        password:''
    })
   
     const handelCange =(e)=>{
         notificationErr()
         setForm({...form,[e.target.name]:e.target.value})
     }

const handleSubmit =async () =>{
    
    try{
     const data = await request('/api/auth/login','POST',{...form})
        setForm({
            email:'',
            password:''
    })
    login(data.token,data.userId)
  
     dispatch({
                type:acitonTypes.USER_AUTH_LOGIN,
                firstName: data.firstName,
                lastName : data.lastName
            })
    }catch(e){
        console.log(e)
    }
  
  
}


  return (
      <FormBox>    
          <ErrorMessage msg = {error}/>     
            <Forms >
                <TextTitle>&#9812; Sign up and play chess </TextTitle>
                <label>E-email</label>
                <FormsInput type={'email'} name='email'onChange={handelCange} value={form.email} autoComplete={false}/>
                <ErrorMsg msg={errMsg.email}>{errMsg.email}</ErrorMsg>
                <label>password</label>
                <FormsInput type={'password'} name='password'onChange={handelCange} value={form.password} autoComplete={false}/>
                <ErrorMsg msg={errMsg.password}>{errMsg.password}</ErrorMsg>
                <PositionButtonLeft>
                    <Button 
                    onClick={handleSubmit} 
                    disabled = {loading}
                    >
                        Login
                    </Button>
                </PositionButtonLeft>              
            </Forms>
      </FormBox>
     
  );
};
