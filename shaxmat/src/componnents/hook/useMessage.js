import  { useCallback, useEffect, useState } from 'react';

export const useMessage = () => {
    const [state,setState] = useState('')

const setMessage = useCallback(async(message)=>{
   return await setState(message)
},[])
 useEffect(()=>{
     setTimeout(() => setState(''), 3000);
 },[state])
 return {setMessage,getMessage:state}
};


