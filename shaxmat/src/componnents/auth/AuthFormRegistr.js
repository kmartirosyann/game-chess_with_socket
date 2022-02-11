import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useHttp } from '../hook/http.hook';

import * as acitonTypes from '../../store/action/actionsTypes'


import {FormsInput,Forms,FormBox,TextTitle,ErrorMsg,Button,PositionButtonLeft} from '../styles/FormsInput'
import { useAuth } from './authHook';
import { useValidationForm } from '../hook/useValidationForm';
import { ErrorMessage } from '../popUp/ErrorMessage';



export const AuthFormRegistr = () => {
    
    const dispatch = useDispatch()
    const {login} = useAuth() 
    const {loading,request,error} = useHttp()
    const {errorMessage,formError,valid} = useValidationForm()

    const [form,setForm] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        rePassword:''
    })
   
const handelCange =(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    valid(e.target.name,e.target.value,form.password)
}

const hadlerBlur = (e)=>{
    valid(e.target.name,e.target.value,form.password)
}

const handleSubmit =async () =>{
    if(!formError) return
    try{
    const data = await request('/api/auth/registr','POST',{...form})
        setForm({
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            rePassword:''
    })
    login(data.token,data.userId)
    dispatch({
        type:acitonTypes.USER_AUTH_LOGIN,
        firstName: data.firstName,
        lastName : data.lastName,
        userId : data.userId
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
                <label>First name</label>
                <FormsInput type={'text'} name='firstName'onChange={handelCange} value={form.firstName} autoComplete={'off'} onBlur={hadlerBlur}/>
                <ErrorMsg msg={errorMessage.firstName}>{errorMessage.firstName}</ErrorMsg>
                <label>Last Name</label>
                <FormsInput type={'text'} name='lastName'onChange={handelCange} value={form.lastName} autoComplete={'off'} onBlur={hadlerBlur}/>
                <ErrorMsg msg={errorMessage.lastName}>{errorMessage.lastName}</ErrorMsg>
                <label>E-email</label>
                <FormsInput type={'email'} name='email'onChange={handelCange} value={form.email} autoComplete={'off'} onBlur={hadlerBlur}/>
                <ErrorMsg msg={errorMessage.email}>{errorMessage.email}</ErrorMsg>
                <label>password</label>
                <FormsInput type={'password'} name='password'onChange={handelCange} value={form.password} autoComplete={'off'} onBlur={hadlerBlur}/>
                <ErrorMsg msg={errorMessage.password}>{errorMessage.password}</ErrorMsg>
                <label>Re-password</label>
                <FormsInput type={'password'} name='rePassword'onChange={handelCange} value={form.rePassword} autoComplete={'off'} onBlur={hadlerBlur}/>
                <ErrorMsg msg={errorMessage.rePassword}>{errorMessage.rePassword}</ErrorMsg>
                <PositionButtonLeft>
                    <Button 
                    onClick={handleSubmit}
                    disabled = {loading || !formError}
                    >
                        Sign up
                    </Button>
                </PositionButtonLeft>
                
            </Forms>
      </FormBox>
     
  );
};
