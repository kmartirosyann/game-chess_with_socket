import  { useCallback, useState } from 'react';

const validMessage = {firstName:'',lastName:'',email:'',password:'',rePassword:''}

export const useValidationForm = () => {
   
  const [errorMessage,setErrorMessage] = useState(validMessage)
  const [formError,setError] = useState(false)

  const valid = useCallback((name,value,password)=>{
   
      if(  name ==='firstName' && value === ''){
             setErrorMessage({firstName:'firstName is requied'})
             setError(false) 
             return
      }
      if(name ==='lastName' && value === ''){
        setErrorMessage({lastName:'lastName is requied'})
        setError(false)
        return 
      }
     if( name ==='email' && value === ''){
        setErrorMessage({email:'email is requied'})
        setError(false)
        return
     }

     if( name ==='email' && !value.match(/^(([^<>()[\]\\.,;:\s@]+(\.[^<>()[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        setErrorMessage({email:'wrong email'})
        setError(false)
        return
     }
     if (name ==='password' &&  value.length < 6  ){
        setErrorMessage({password:'password must have more than 6 characters'})
        setError(false)
        return
     }
     if (name === 'rePassword' && value !== password){
        setErrorMessage({rePassword:'password must match rePassword'})
        setError(false)
        return
     }
      setError(true) 
      setErrorMessage(validMessage)
  },[])
   return {errorMessage,formError,valid}
};
