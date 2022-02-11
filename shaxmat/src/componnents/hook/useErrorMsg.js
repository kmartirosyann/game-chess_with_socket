import { useCallback, useState } from "react"



export const useErrorMsg =()=>{
    const [errMsg,setState] = useState({'email':'','password':''})
    const notificationErr = useCallback((errorMsg)=>{
        errorMsg ? errorMsg.map(i => setState({...errMsg,[i.param]:i.msg}) ):setState({'email':'','password':''})

    },[errMsg])
 
    return {errMsg,notificationErr}
}